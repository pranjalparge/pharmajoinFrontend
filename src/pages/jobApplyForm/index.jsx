import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  Chip,
  Modal,
  TextField,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar"
import WorkIcon from "@mui/icons-material/Work";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Pagination } from "@mui/material";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const baseURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    fetch(`${baseURL}/api/get_all_vacancy`)
      .then((response) => response.json())
      .then((data) => {
        if (data.jobs) {
          setJobs(data.jobs);
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentPageJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleOpen = (company) => {
    setFormData({ ...formData, company });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "", email: "", phone: "", company: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API call here to submit form data
    handleClose();
  };
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const job = currentPageJobs.find((job) => job._id === jobId);

  // Fetch job details using the jobId or display them if passed via props
 
  return (
    <>
    <Navbar/>
    <Box sx={{ marginTop: 4 }}>
    <div>
      {job ? (
        <Card
          key={job._id}
          sx={{
            maxWidth: 1000,
            margin: "auto",
            padding: 2,
            border: "1px solid #e0e0e0",
            boxShadow: 2,
            borderRadius: "8px",
            mb: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {job.job_title}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <Typography variant="subtitle1" color="text.secondary">
                <img
                  src={job.img}
                  alt={`${job.company_name} Icon`}
                  style={{ width: "50px", height: "50px", marginRight: "8px" }}
                />
                {job.company_name}
              </Typography>
              <Chip
                icon={<VerifiedIcon fontSize="small" sx={{ color: "#268112" }} />}
                label="Verified"
                size="small"
                sx={{ background: "#a8fa93" }}
              />
            </Stack>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Description: {job.description || "No job description provided."}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {job.valid_upto && (
                  <>
                    <span style={{ fontWeight: "bold" }}>Valid Upto:</span> {job.valid_upto}
                  </>
                )}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleOpen(job.company_name)}
              >
                Apply
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body2" color="text.secondary" textAlign="center">
          No job found for the provided ID.
        </Typography>
      )}
    </div>
      {/* {currentPageJobs.map((job) => (
        
        <Card
          key={job._id}
          sx={{
            maxWidth: 1000,
            margin: "auto",
            padding: 2,
            border: "1px solid #e0e0e0",
            boxShadow: 2,
            borderRadius: "8px",
            mb: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {job.job_title}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <Typography variant="subtitle1" color="text.secondary">
                <img
                  src={job.img}
                  alt={`${job.company_name} Icon`}
                  style={{ width: "50px", height: "50px", marginRight: "8px" }}
                />
                {job.company_name}
              </Typography>
              <Chip
                icon={<VerifiedIcon fontSize="small" sx={{ color: "#268112" }} />}
                label="Verified"
                size="small"
                sx={{ background: "#a8fa93" }}
              />
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: "bold" }}>
              Description: {job.description || "No job description provided."}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {job.valid_upto && (
                  <>
                    <span style={{ fontWeight: "bold" }}>Valid Upto:</span> {job.valid_upto}
                  </>
                )}
              </Typography>
              <Button variant="contained" color="primary" size="small" onClick={() => handleOpen(job.company_name)}>
                Apply
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))} */}

      <Stack alignItems="center" mt={3}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" size="large" />
      </Stack>

      {/* Modal for Application Form */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Apply for {formData.company}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
              required
            />
               <TextField
              label="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
    
    </>
  );
};

export default JobCard;
