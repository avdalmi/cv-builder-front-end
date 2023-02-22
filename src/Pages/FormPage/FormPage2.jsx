import { Formik, FieldArray, Field, ErrorMessage, Form } from "formik";
import React from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import TextInputField from "../../Components/Form/InputField";
import MultiStepForm, { FormStep } from "../../Components/Form/MultiStepForm";
import { profileValidationSchema } from "./FormValidation";
import PhoneInput from "react-phone-input-2";
import PhoneInputField from "../../Components/Form/PhoneInputField";
import ProfileSection from "../../Components/FormSections/1_ProfileSection";
import SkillsSection from "../../Components/FormSections/2_SkillsSection";

const initialValues = {
  profile: {
    jobTitle: "",
    currentLocation: "",
    email: "",
  },
  fullName: "",
  skills: [
    {
      name: "",
      level: 0,
    },
  ],
  street: "",
  country: "",
};
const emptySkill = { skill: "", level: 0 };

function FormPage2() {
  return (
    <div>
      <h1>hello</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <MultiStepForm>
            <FormStep
              stepName="Skills Information"
              onSubmit={() => console.log("Skills submit")}
            >
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <Grid
                    container
                    spacing={2}
                    sx={{ marginTop: 2, paddingX: 2 }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6" component="h2">
                        Add skills
                      </Typography>
                    </Grid>
                    {values.skills.map((_, index) => (
                      <>
                        <Grid item md={5}>
                          <Field
                            fullWidth
                            name={`skills.${index}.name`}
                            component={TextField}
                            label="skill name"
                          />
                        </Grid>
                        <Grid item md={5}>
                          <Field
                            fullWidth
                            name={`skills.${index}.level`}
                            component={TextField}
                            label="skill level"
                          />
                        </Grid>
                        {index > 0 && (
                          <Grid item md={2}>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => remove(index)}
                            >
                              Delete
                            </Button>
                          </Grid>
                        )}
                      </>
                    ))}{" "}
                    <Grid item xs={12}>
                      <Button
                        variant="outlined"
                        onClick={() => push({ name: "", level: "" })}
                      >
                        Add Link
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </FieldArray>
            </FormStep>

            <FormStep
              stepName="Personal Information"
              onSubmit={() => console.log("profile information submit")}
              //   validationSchema={profileValidationSchema}
            >
              <ProfileSection />
            </FormStep>
          </MultiStepForm>
        )}
      </Formik>
      {/*       
      <MultiStepForm
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <>
          <ProfileSection />
        </>

      <SkillsSection values={values}/> 
        <FormStep
          stepName="Skills"
          onSubmit={() => console.log("skills submit")}
        >
          <FieldArray name="skills">
            {({ push, remove, errors, values, isSubmitting }) => (
              <React.Fragment key={values.name}>
                {console.log("values", )}
                {/* {values.skills.map((_, index) => (
                  <Grid
                    container
                    item
                    // className={classes.noWrap}
                    key={index}
                    spacing={2}
                  >
                    <Grid item container spacing={2} xs={12} sm="auto">
                      <Grid item xs={12} sm={6}>
                        <Field
                          fullWidth
                          name={`skills.${index}.name`}
                          component={TextField}
                          label="name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          fullWidth
                          name={`skills[${index}].level`}
                          component={TextField}
                          type="number"
                          label="level (%)"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm="auto">
                      <Button
                        disabled={isSubmitting}
                        onClick={() => remove(index)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                ))} 

                <Grid item>
                  {typeof errors.skills === "string" ? (
                    <Typography color="error">{errors.skills}</Typography>
                  ) : null}
                </Grid>

                <Grid item>
                  <Button
                    disabled={isSubmitting}
                    variant="contained"
                    onClick={() => push(emptySkill)}
                  >
                    Add Donation
                  </Button>
                </Grid>
              </React.Fragment>
            )}
          </FieldArray>
        </FormStep>

        {/* Form Page 2 - Skills 
        {/* <FormStep
          stepName="Skills"
          onSubmit={() => console.log("step2 submit")}
          validationSchema={yup.object({
            street: yup.string().required("street is required"),
            country: yup.string().required("country is required"),
          })}
        >
          <TextInputField name="street" label="Street" />
          <TextInputField name="country" label="Country" />
        </FormStep>

        <FormStep
          stepName="Address"
          onSubmit={() => console.log("step3 submit")}
          validationSchema={yup.object({
            street: yup.string().required("street is required"),
            country: yup.string().required("country is required"),
          })}
        >
          <TextInputField name="street" label="Street" />
          <TextInputField name="country" label="Country" />
        </FormStep>
        </MultiStepForm> */}
    </div>
  );
}

export default FormPage2;

// {/* Form Page 1 - Personal Information */}
//         {/* <FormStep
//           stepName="Personal Information"
//           onSubmit={() => console.log("step1 submit")}
//           validationSchema={profileValidationSchema}
//         >
//           <TextInputField name="fullName" label="Full name" />
//           <TextInputField name="profile.jobTitle" label="Job title" />
//           <TextInputField
//             name="profile.currentLocation"
//             label="Current location"
//           />
//           <TextInputField name="profile.email" label="E-mail" />
//           {/* <PhoneInputField name="profile.phone" label="Phone number" />
//         </FormStep> */}
