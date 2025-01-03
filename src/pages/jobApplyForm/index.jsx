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

import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/Footer";
import WorkIcon from "@mui/icons-material/Work";
import VerifiedIcon from "@mui/icons-material/Verified";
import CircularProgress from '@mui/material/CircularProgress';

import { Pagination } from "@mui/material";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;
  const [open, setOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  const baseURL = import.meta.env.VITE_SERVER_URL;

  const [job, setJob] = useState(null); // Store the matching job
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Extract the jobId from the URL query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get("jobId");

  useEffect(() => {
    // Fetch all jobs from the API
    fetch(`${baseURL}/api/get_all_vacancy`)
      .then((response) => response.json())
      .then((data) => {
        if (data.jobs) {
          // Find the job with the matching jobId
          const matchingJob = data.jobs.find((job) => job._id === jobId);
          setJob(matchingJob); // Set the matching job
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch job details.");
        setLoading(false);
      });
  }, [jobId]);


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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company_name: formData.company, // Aligning with API field naming
    };

    try {
      const response = await fetch(
        "https://pharma-backend-ashen.vercel.app/api/addForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("You have applied successfully!");
        window.location.href = "https://t.me/pharmajoin";
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      {" "}
      <Nav />
      <Navbar />
      <Box sx={{ marginTop: "40px",marginBottom:"30px" }}>
        <div>
          {job ? (
            <>
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
                  <Typography fontWeight="bold" gutterBottom>
                    {job.job_title}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1 }}
                  >
                    <Typography fontWeight="bold" gutterBottom>
                      <img
                        src={job.img}
                        alt={`${job.company_name} Icon`}
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "8px",
                          paddingTop: "1px",
                        }}
                      />
                      {job.company_name}
                    </Typography>
                    <Chip
                      icon={
                        <VerifiedIcon
                          fontSize="small"
                          sx={{ color: "#268112" }}
                        />
                      }
                      label="Verified"
                      size="small"
                      sx={{ background: "#a8fa93" }}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <WorkIcon fontSize="small" />
                      <Typography variant="body2">{job.experience}</Typography>
                    </Box>
                  </Stack>
                  <Typography sx={{ mb: 2 }}>
                    <span style={{ fontWeight: "bold" }}> Description:</span>{" "}
                    {job.decription}
                  </Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2" color="text.secondary">
                      {job.valid_upto && (
                        <>
                          <span style={{ fontWeight: "bold" }}>
                            Valid Upto:
                          </span>{" "}
                          {job.valid_upto}
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

              <div
                style={{
                  maxWidth: "1000px",
                  margin: "auto",
                  padding: "16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                  background: "#fff",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {job.heading1}
                </Typography>

                {/* Iterate over content1 array */}

                {job.content1.map((item, index) => (
                  <>
                    <Typography variant="body1" fontWeight="bold">
                      {item.number} {item.head}
                    </Typography>
                    <Typography variant="body2" color="#272727" sx={{paddingTop:"8px"}}>
                      - {item.subheading}
                    </Typography>
                  </>
                ))}

                <Typography variant="h5" fontWeight="bold" gutterBottom mt={2}>
                  {job.heading2}    <Typography
                  variant="body1"
                  color="#272727"
                  
                >
                  {job.content2}
                </Typography>
                </Typography>
            

                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {job.heading3}        <Typography
                  variant="body1"
                  color="#272727"
               
                >
                  {job.content3}
                  <br />
                </Typography>
                </Typography>
        
                {job.link && (
                  <>
                    <Button
                      sx={{
                        marginTop:"10px",
                        marginBottom:"10px",
                        background: "#ea9700eb",
                        padding: "10px",
                        color: "#fff",
                      }}
                      color="primary"
                      size="small"
                      onClick={handleClick} // Trigger the state change on button click
                    >
                      Apply For Job
                    </Button>

                    {showMessage && ( // Conditionally render the Typography based on the state
                      <Typography>
                        <span style={{ fontWeight: "bold" }}>
                          To Apply For this job please visit &nbsp;
                        </span>{" "}
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "blue", textDecoration: "underline" }}
                        >
                          {job.link}
                        </a>
                      </Typography>
                    )}
                  </>
                )}
              </div>
            </>
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              <CircularProgress />
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

        {/* <Stack alignItems="center" mt={3}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Stack> */}

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
                label="Company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </Box>
      <Footer />
    </>
  );
};

export default JobCard;
