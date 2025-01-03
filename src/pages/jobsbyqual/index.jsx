import React from 'react';
import { Link } from "@mui/material";
import { Grid, Typography, Paper } from '@mui/material';

const qualifications = [
  { name: 'B.Pharm', color: '#898b13' },
  { name: 'M.pharm', color: '#00008B' },
  { name: 'MSc', color: '#FF6700' },
  { name: 'Bsc', color: '#8B0000' },
  { name: 'Pharm.D', color: '#FF0000' },
  { name: 'Lifesciences', color: '#006400' },
  { name: 'Ph.D', color: '#FF00FF' },
  { name: 'B.Tech', color: '#007BFF' },
  { name: 'M.Tech', color: '#1E90FF' },
  { name: 'MBBS', color: '#8A2BE2' },
  { name: 'BHMS', color: '#FF0000' },
  { name: 'BDS', color: '#002147' },
  { name: 'BAMS', color: '#8B0000' },
  { name: 'ITI', color: '#1E90FF' },
  { name: 'Engineering', color: '#008000' },
  { name: 'Diploma', color: '#008080' },
  { name: 'D.Pharm', color: '#00BFFF' },
];
const location = [
  { name: 'Pune', color: '#FF5733' },
  { name: 'Mumbai', color: '#008000' },
  { name: 'Hyderabad', color: '#5733FF' },
  { name: 'Bangalore', color: '#1E90FF' },
  { name: 'Work From Home', color: '#1E90FF' },
  { name: 'Gujarat', color: '#898b13' },
  { name: 'Haryana', color: '#B833FF' },
  { name: 'Ahmedabad', color: '#006400' }
];

function QualificationsGrid() {
  return (
    <>
    <div style={{paddingRight:200,paddingLeft:200,paddingTop:100,paddingBottom:100  }}>
      <Typography variant="h5" align="center" gutterBottom>
        Jobs By Qualification
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {qualifications.map((qual, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
               <Link href="/jobapply" underline="none"> 
            <Paper
              style={{
                backgroundColor: qual.color,
                color: '#FFF',
                padding: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              elevation={3}
            >
              {qual.name}
            </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" gutterBottom>
          Jobs By Qualification
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {location.map((qual, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
                 <Link href="/jobapply" underline="none"> 
              <Paper
                style={{
                  backgroundColor: qual.color,
                  color: '#FFF',
                  padding: '20px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
                elevation={3}
              >
                {qual.name}
              </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
    </div>

      </>
  );
}

export default QualificationsGrid;
