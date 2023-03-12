import React from "react";
import MultiStepForm, {
  FormStep,
} from "../../Components/FormNavigation/MultiStepForm/MultiStepForm";
import {
  profileValidationSchema,
  certificatesValidationSchema,
  workValidationSchema,
  educationValidationSchema,
  skillsValidationSchema,
  publicationsValidationSchema,
  languagesValidationSchema,
  hobbiesValidationSchema,
  projectsValidationSchema,
} from "./FormValidation";
import ProfileSection from "../../Components/FormSections/1_ProfileSection";
import SkillsSection from "../../Components/FormSections/2_SkillsSection";
import WorkExpSection from "../../Components/FormSections/3_WorkExpSection";
import { initialValues } from "./initialValues";
import EducationSection from "../../Components/FormSections/4_EducationSection";
import CertificatesSection from "../../Components/FormSections/5_CertificatesSection";
import PublicationSection from "../../Components/FormSections/6_PublicationSection";
import LanguageSection from "../../Components/FormSections/7_LanguageSection";
import HobbiesSection from "../../Components/FormSections/8_HobbiesSection";
import ProjectsSection from "../../Components/FormSections/9_ProjectsSection";
import { MONGO_COLLECTION, MONGO_DATABASE } from "../../config/config";
import { Box, createTheme, styled } from "@mui/material";

function FormPage({ mongoContext: { client, user } }) {
  const onSubmit = async (values) => {
    const collection = client.db(MONGO_DATABASE).collection(MONGO_COLLECTION);
    const reponse = await collection.insertOne(values);
    console.log(reponse);
  };

  return (
    <Box sx={{ margin: "2rem" }}>
      <MultiStepForm
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Profile"
          onSubmit={() => console.log("personal information submit")}
          // validationSchema={profileValidationSchema}
        >
          <ProfileSection name="profile" initialValues={initialValues} />
        </FormStep>

        <FormStep
          stepName="Skills"
          onSubmit={() => console.log("skills submit")}
          // validationSchema={skillsValidationSchema}
        >
          <SkillsSection initialValues={initialValues} name="skills" />
        </FormStep>

        <FormStep
          stepName="Work"
          onSubmit={() => console.log("work experience submit")}
          // validationSchema={workValidationSchema}
        >
          <WorkExpSection initialValues={initialValues} name="workExperience" />
        </FormStep>

        <FormStep
          stepName="Education"
          onSubmit={() => console.log("education submit")}
          // validationSchema={educationValidationSchema}
        >
          <EducationSection initialValues={initialValues} name="education" />
        </FormStep>

        <FormStep
          stepName="Certificates"
          onSubmit={() => console.log("certificates submit")}
          // validationSchema={certificatesValidationSchema}
        >
          <CertificatesSection initialValues={initialValues} />
        </FormStep>

        <FormStep
          stepName="Publications"
          onSubmit={() => console.log("certificates submit")}
          // validationSchema={publicationsValidationSchema}
        >
          <PublicationSection
            initialValues={initialValues}
            name="publications"
          />
        </FormStep>

        <FormStep
          stepName="Languages"
          onSubmit={() => console.log("languages submit")}
          // validationSchema={languagesValidationSchema}
        >
          <LanguageSection initialValues={initialValues} />
        </FormStep>

        <FormStep
          stepName="Hobbies"
          onSubmit={() => console.log("hobbies submit")}
          // validationSchema={hobbiesValidationSchema}
        >
          <HobbiesSection
            initialValues={initialValues}
            style={{ width: 500, margin: "0 auto" }}
          />
        </FormStep>

        <FormStep
          stepName="Projects"
          onSubmit={() => console.log("projects submit")}
          // validationSchema={projectsValidationSchema}
        >
          <ProjectsSection initialValues={initialValues} name="projects" />
        </FormStep>
      </MultiStepForm>
    </Box>
  );
}

export default FormPage;
