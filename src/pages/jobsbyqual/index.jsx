import React from 'react';
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

function QualificationsGrid() {
  return (
    <div style={{ padding: 100 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Jobs By Qualification
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {qualifications.map((qual, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default QualificationsGrid;
