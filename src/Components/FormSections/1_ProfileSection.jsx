import React from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
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
