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
import {
  ProfileSection,
  SkillsSection,
  WorkExpSection,
  EducationSection,
  CertificatesSection,
  PublicationSection,
  LanguageSection,
  HobbiesSection,
  ProjectsSection,
} from "../../Components/FormSections/index";
import { initialValues } from "./initialValues";
import { MONGO_COLLECTION, MONGO_DATABASE } from "../../config/config";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FormPage({ mongoContext: { client, user } }) {
  const onSubmit = async (values) => {
    const collection = client.db(MONGO_DATABASE).collection(MONGO_COLLECTION);
    const reponse = await collection.insertOne(values);
    console.log(reponse);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ m: "2rem" }}>
      <MultiStepForm
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          // console.log(JSON.stringify(values, null, 2));
          navigate("/final", { state: { values } });
        }}
      >
        <FormStep stepName="Profile" validationSchema={profileValidationSchema}>
          <ProfileSection name="profile" initialValues={initialValues} />
        </FormStep>

        <FormStep stepName="Skills" validationSchema={skillsValidationSchema}>
          <SkillsSection initialValues={initialValues} name="skills" />
        </FormStep>

        <FormStep stepName="Work" validationSchema={workValidationSchema}>
          <WorkExpSection initialValues={initialValues} name="workExperience" />
        </FormStep>

        <FormStep
          stepName="Education"
          validationSchema={educationValidationSchema}
        >
          <EducationSection initialValues={initialValues} name="education" />
        </FormStep>

        <FormStep
          stepName="Certificates"
          validationSchema={certificatesValidationSchema}
        >
          <CertificatesSection initialValues={initialValues} />
        </FormStep>

        <FormStep
          stepName="Publications"
          validationSchema={publicationsValidationSchema}
        >
          <PublicationSection
            initialValues={initialValues}
            name="publications"
          />
        </FormStep>

        <FormStep
          stepName="Languages"
          validationSchema={languagesValidationSchema}
        >
          <LanguageSection initialValues={initialValues} />
        </FormStep>

        <FormStep stepName="Hobbies" validationSchema={hobbiesValidationSchema}>
          <HobbiesSection initialValues={initialValues} />
        </FormStep>

        <FormStep
          stepName="Projects"
          validationSchema={projectsValidationSchema}
        >
          <ProjectsSection initialValues={initialValues} name="projects" />
        </FormStep>
      </MultiStepForm>
    </Box>
  );
}

export default FormPage;
