import { Box, Button, Typography } from "@mui/material";
import React from "react";

function WelcomePage() {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "1rem auto",
      }}
    >
      <Typography variant="h1">CV-Builder</Typography>
      <Typography sx={{ width: "70vw", m: "1rem auto" }} variant="subtitle1">
        As a project for a new start-up secondment company, together with
        another developer we built a CV-builder. My colleague and I split the
        responsibilities, where I was in charge of the front-end developement
        and he was in charge of the back-end developement.
        <br />
        <br />
        The front-end was built using React, Formik, Yup validations, Axios, and
        Material UI. The back-end utilises MongoDB, Overleaf to produce LaTeX
        files.
        <br />
        <br />
        The goal of this project was to provide a standardized CV format that
        the company could use to send to clients. By utilizing Formik and Yup
        validation, I was able to create a user-friendly form that ensured all
        necessary information was collected and entered correctly. Axios was
        used to grab and display country data from countryAPI. Material UI was
        used to create a visually appealing and intuitive user interface.
        <br />
        <br />
        With this CV-builder, the secondment company can now quickly and
        efficiently generate a standardized CV that accurately reflects the
        skills and qualifications of their employees.
      </Typography>
      <Button href="/form" variant="outlined">
        Go to form
      </Button>
    </Box>
  );
}

export default WelcomePage;
