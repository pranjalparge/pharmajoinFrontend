import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  Chip,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Pagination } from "@mui/material";


const JobCard = ( ) => {

  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:3000/api/get_all_vacancy")
      .then((response) => response.json())
      .then((data) => {
        if (data.jobs) {
          setJobs(data.jobs); // Set the jobs array
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
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
    <Box
      sx={{
        // width: "100%",
        // maxWidth: "1440px",
        marginTop: 4,
        // padding: "20px",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
              {/* <div className="gb-grid-wrapper gb-grid-wrapper-8f609f0c gb-query-loop-wrapper">
          {currentJobs.map((job) => (
            <div key={job._id} className="job-card">
              <div className="card-header">
                <span className="badge verified">Verified</span>
                <button className="walk-in-btn">Walk In Interview</button>
              </div>
              <h3 className="job-title">{job.job_title}</h3>
              <div className="company-info" align="center">
                <img
                  src="https://via.placeholder.com/50" // Replace with dynamic logo URL if available
                  alt={`${job.company_name} Icon`}
                  className="company-icon"
                />
                <span className="company-name">{job.company_name}</span>
              </div>

              <div className="job-details">
                <div className="exp">
                  <WorkIcon />
                  <p className="experience">{job.experience}</p>
                </div>
                <p className="date">Valid Upto: {job.valid_upto}</p>
              </div>

              <a
                href="https://t.me/pharmajoin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="apply-now-btn">Apply Now</button>
              </a>
            </div>
          ))}
        </div> */}

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
            <button className="walk-in-btn">Walk In Interview</button>

            {/* Job Title */}
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {job.job_title}
            </Typography>

            {/* Company and Rating */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <Typography variant="subtitle1" color="text.secondary">
                <img
                  src={job.company_logo || "https://via.placeholder.com/50"}
                  alt={`${job.company_name} Icon`}
                  className="company-icon"
                  style={{ width: "50px", height: "50px", marginRight: "8px" }}
                />
                {job.company_name}
              </Typography>
              <Chip
                icon={<VerifiedIcon fontSize="small" sx={{}} />}
                label="Verified"
                size="small"
                sx={{  }}
              />
            </Stack>

            {/* Experience, Salary, and Location */}
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <WorkIcon fontSize="small" />
                <Typography variant="body2">{job.experience}</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                ₹ {job.salary || "Not disclosed"}
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">{job.location || "Location not available"}</Typography>
              </Box>
            </Stack>

            {/* Job Description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
              noWrap
            >
              {job.description || "No job description provided."}
            </Typography>

            {/* Tags */}
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
              {(job.tags || []).map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Stack>

            {/* Footer: Time & Apply Button */}
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                Valid Upto: {job.valid_upto}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                href={job.apply_link || "https://t.me/pharmajoin"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}

      {/* Pagination */}
      <Stack alignItems="center" mt={3}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Stack>
    </>


    </Box>
  );
};

export default JobCard;
