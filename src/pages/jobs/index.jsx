import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  Chip,
  CircularProgress,
} from "@mui/material";
import Navbar from '../../components/Navbar/Navbar';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/Footer';
import WorkIcon from "@mui/icons-material/Work";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Pagination } from "@mui/material";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const jobsPerPage = 3;
  const baseURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    // Show loader while fetching data
    setIsLoading(true); 
    
    fetch(`${baseURL}/api/get_all_vacancy`)
      .then((response) => response.json())
      .then((data) => {
        if (data.jobs) {
          setJobs(data.jobs.reverse());
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error))
      .finally(() => setIsLoading(false)); // Hide loader once done
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Get current page jobs
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentPageJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Nav />
      <Navbar />
      <Box sx={{ marginTop: 4 }}>
        {/* Loader */}
        {isLoading ? (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "60vh" }}
          >
            <CircularProgress color="primary" />
            <Typography variant="body1" mt={2}>
              Loading Jobs...
            </Typography>
          </Stack>
        ) : (
          <>
            {currentPageJobs.map((job) => (
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
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1 }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      <img
                        src={job.img}
                        alt={`${job.company_name} Icon`}
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "8px",
                        }}
                      />
                      {job.company_name}
                    </Typography>
                    <Chip
                      icon={
                        <VerifiedIcon
                          fontSize="small"
                          sx={{ color: "#268112 !important" }}
                        />
                      }
                      label="Verified"
                      size="small"
                      sx={{ background: "#a8fa93 !important" }}
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
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <span style={{ fontWeight: "bold" }}>Description:</span>&nbsp;
                    {job.decription || "No job description provided."}
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
                      href={`/jobapply?jobId=${job._id}`}
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}

            {/* Pagination */}
            <Stack alignItems="center" mt={3} mb={5}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Stack>
          </>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default JobCard;
