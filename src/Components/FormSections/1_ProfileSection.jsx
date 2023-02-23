import React from "react";

import { FormContainer, QuestionContainer } from "../../Styles/Form";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import { FormStep } from "../Form/MultiStepForm";
import { profileValidationSchema } from "../../Pages/FormPage/FormValidation";

import TextInputField from "../Form/InputField";
function ProfileSection(formProps) {
  return (
    <FormStep
      stepName="Personal Information"
      onSubmit={() => console.log("step1 submit")}
      validationSchema={profileValidationSchema}
    >
      <TextInputField name="fullName" label="Full name" />
      <TextInputField name="profile.jobTitle" label="Job title" />
      <TextInputField name="profile.currentLocation" label="Current location" />
      <TextInputField name="profile.email" label="E-mail" />
      {/* <PhoneInputField name="profile.phone" label="Phone number" /> */}
    </FormStep>
  );
}

export default ProfileSection;

// <h1>Personal Information</h1>
//       <QuestionContainer>
//         <label>Full Name</label>
//         <Field
//           name="fullName"
//           component="input"
//           type="text"
//           placeholder="Full name"
//         />
//       </QuestionContainer>

//       <QuestionContainer>
//         <label>Job title</label>
//         <Field
//           name="profile.jobTitle"
//           component="input"
//           type="text"
//           placeholder="Job title"
//         />
//       </QuestionContainer>

//       <QuestionContainer>
//         <label>Current location</label>
//         <Field
//           name="profile.currentLocation"
//           component="input"
//           type="text"
//           placeholder="Current location"
//         />
//       </QuestionContainer>

//       <QuestionContainer>
//         <label>E-mail</label>
//         <Field
//           name="profile.email"
//           component="input"
//           type="text"
//           placeholder="email"
//         />
//       </QuestionContainer>

//       {/* <QuestionContainer>
//               <label>Profile picture</label>
//               <Field
//                 name="profile.picture"
//                 component="input"
//                 type="text"
//                 placeholder=""
//               />
//             </QuestionContainer> */}
//       {/* <FileField name="files" /> */}
//       <QuestionContainer>
//         <label>Do you have a driving license? (check box for yes)</label>
//         <Field
//           name="profile.drivinglicense"
//           component="input"
//           type="checkbox"
//         />
//       </QuestionContainer>

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
