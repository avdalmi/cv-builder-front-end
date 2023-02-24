import React from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import { FormStep } from "../Form/MultiStepForm";
import TextInputField from "../Form/TextInputField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Field } from "formik";
import FileUploadField from "../Form/FileUploadField";
import SelectField from "../Form/SelectField";

function ProfileSection(profileValidationSchema) {
  return (
    <div>
      <TextInputField name="fullName" label="Full name *" id="fullName" />
      <TextInputField name="profile.jobTitle" label="Job title *" />
      <TextInputField
        name="profile.currentLocation"
        label="Current location *"
      />
      <TextInputField name="profile.email" label="E-mail *" />
      {/* <PhoneInputField name="profile.phone" label="Phone number" />  */}
      <FileUploadField name="profile.file" type="file" />
      <FormControl>
        <FormLabel htmlFor="profile.drivingLicense">
          Do you have a driving license?
        </FormLabel>
        <Field type="radio" name="profile.drivingLicense" value="true" />
        yes
        <Field type="radio" name="profile.drivingLicense" value="false" />
        no
      </FormControl>{" "}
      <br />
      <div>
        <FormLabel htmlFor="profile.brainFirst">
          Select your three Brain First Results:
        </FormLabel>
        <br />
        <SelectField
          name="profile.brainFirst.resultOne"
          options={brainFirstOptions}
          helperText=" select your first result "
        />

        <SelectField
          name="profile.brainFirst.resultTwo"
          options={brainFirstOptions}
          helperText="select your second result"
        />

        <SelectField
          name="profile.brainFirst.resultThree"
          options={brainFirstOptions}
          helperText=" select your third result "
        />
      </div>
      <TextInputField
        placeholder="type something..."
        name="profile.introductionText"
        multiline
        rows={5}
        label="Write a little about yourself... *"
      />
    </div>
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
