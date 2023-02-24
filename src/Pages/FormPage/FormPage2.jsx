import { Formik, FieldArray, Field, ErrorMessage, Form } from "formik";
import React from "react";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import TextInputField from "../../Components/Form/InputField";
import MultiStepForm, { FormStep } from "../../Components/Form/MultiStepForm";
import { profileValidationSchema } from "./FormValidation";
import PhoneInput from "react-phone-input-2";
import PhoneInputField from "../../Components/Form/PhoneInputField";
import ProfileSection from "../../Components/FormSections/1_ProfileSection";
import SkillsSection from "../../Components/FormSections/2_SkillsSection";

function FormPage2() {
  //   console.log(values.skills);
  const linksGroup = { linkname: "", linkurl: "" };
  const initialValues = {
    profile: {
      jobTitle: "",
      currentLocation: "",
      email: "",
    },
    fullName: "",
    links: [linksGroup],
    skills: [
      {
        name: "",
        level: 0,
      },
    ],
    street: "",
    country: "",
  };

  return (
    <div>
      <h1>hello</h1>
      <MultiStepForm
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <ProfileSection />

        <FormStep
          stepName="Skills"
          onSubmit={() => console.log("step2 submit")}
        >
          <FieldArray
            name="skills"
            render={(arrayHelpers) => {
              // console.log("helpers", arrayHelpers);
              return (
                <div>
                  {initialValues.skills.map((skill, index) => (
                    <div key={index}>
                      <Field
                        name={`skills[${index}].name`}
                        placeholder="skill"
                      />
                      <br />
                      <Field name={`skills[${index}].level`} />
                      <button
                        type="button"
                        onClick={() => {
                          arrayHelpers.remove(index); //removes from the final value
                          initialValues.skills.splice(index, 1); //removes locally, UI only
                        }}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      arrayHelpers.push({ name: "", level: 0 });
                      initialValues.skills.push({ name: "", level: 0 });
                    }}
                  >
                    +
                  </button>
                </div>
              );
            }}
          />
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
      </MultiStepForm>
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
