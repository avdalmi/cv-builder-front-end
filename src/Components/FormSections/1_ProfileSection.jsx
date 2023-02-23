import React from "react";

import { FormContainer, QuestionContainer } from "../../Styles/Form";
import { useState } from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import { FormStep } from "../Form/MultiStepForm";
import { profileValidationSchema } from "../../Pages/FormPage/FormValidation";

import TextInputField from "../Form/InputField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Field, useFormikContext, useField } from "formik";
import * as yup from "yup";

function ProfileSection(props) {
  // console.log("validation schema props", props);
  const [field, meta] = useField(props);

  // console.log("props", props);
  // console.log("field", field);
  console.log("meta", meta);
  return (
    <FormStep
      stepName="Personal Information"
      onSubmit={() => console.log("step1 submit")}
      validationSchema={props}
    >
      <TextInputField name="fullName" label="Full name" />
      <TextInputField name="profile.jobTitle" label="Job title" />
      <TextInputField name="profile.currentLocation" label="Current location" />
      <TextInputField name="profile.email" label="E-mail" />
      {/* <PhoneInputField name="profile.phone" label="Phone number" />  */}
      <div
        style={{ margin: "15px", border: "1px solid black", padding: "10px" }}
      >
        <label>Select a profile picture</label>
        <Field
          name="profile.file"
          type="file"
          value={meta.value.profile.file}
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <FormControl>
        <FormLabel>Do you have a driving license?</FormLabel>
        <Field type="radio" name="profile.drivingLicense" value="true" />
        yes
        <Field type="radio" name="profile.drivingLicense" value="false" />
        no
      </FormControl>{" "}
    </FormStep>
  );
}

export default ProfileSection;

//       <QuestionContainer>
//         <label>Select your top three Brain First Results</label>
//         <br />
//         <label>Result 1</label>
//         <Field name="profile.brainFirst.one" component="select">
//           <option />
//           {brainFirstOptions.map((option) => {
//             return (
//               <option key={option.id} value={option.name}>
//                 {option.name}
//               </option>
//             );
//           })}
//         </Field>
//         <br />
//         <label>Result 2</label>
//         <Field name="profile.brainFirst.two" component="select">
//           <option />
//           {brainFirstOptions.map((option) => {
//             return (
//               <option key={option.id} value={option.name}>
//                 {option.name}
//               </option>
//             );
//           })}
//         </Field>
//         <br />
//         <label>Result 3</label>
//         <Field name="profile.brainFirst.three" component="select">
//           <option />
//           {brainFirstOptions.map((option) => {
//             return (
//               <option key={option.id} value={option.name}>
//                 {option.name}
//               </option>
//             );
//           })}
//         </Field>
//       </QuestionContainer>

//       <QuestionContainer>
//         <label>Write a short introduction</label>
//         <br />
//         <Field
//           name="profile.introduction"
//           component="textarea"
//           placeholder="introduction text"
//         ></Field>
//       </QuestionContainer>
