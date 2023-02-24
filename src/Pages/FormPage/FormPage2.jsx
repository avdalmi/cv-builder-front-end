import React from "react";
import MultiStepForm, { FormStep } from "../../Components/Form/MultiStepForm";
import {
  profileValidationSchema,
  workValidationSchema,
} from "./FormValidation";
import ProfileSection from "../../Components/FormSections/1_ProfileSection";
import SkillsSection from "../../Components/FormSections/2_SkillsSection";
import WorkExpSection from "../../Components/FormSections/3_WorkExpSection";
import { initialValues } from "./initialValues";

function FormPage2() {
  return (
    <div>
      <h1>Form Page</h1>
      <MultiStepForm
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Personal Information"
          onSubmit={() => console.log("personal information submit")}
          validationSchema={profileValidationSchema}
        >
          <ProfileSection />
        </FormStep>

        <FormStep
          stepName="Skills"
          onSubmit={() => console.log("skills submit")}
        >
          <SkillsSection initialValues={initialValues} />
        </FormStep>

        <FormStep
          stepName="Work experience"
          onSubmit={() => console.log("work experience submit")}
          validationSchema={workValidationSchema}
        >
          <WorkExpSection initialValues={initialValues} />
        </FormStep>
      </MultiStepForm>
    </div>
  );
}

export default FormPage2;
