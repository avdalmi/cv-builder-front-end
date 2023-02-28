import React from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import TextInputField from "../Form/TextInputField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Field } from "formik";
import FileUploadField from "../Form/FileUploadField";
import SelectField from "../Form/SelectField";
import CountrySelect from "../Form/CountrySelect";
import { FormControlLabel, Radio } from "@mui/material";
import RadioButtonGroup from "../Form/RadioGroup";

function ProfileSection(profileValidationSchema) {
  return (
    <div>
      <TextInputField
        name="fullName"
        label="Full name *"
        id="fullName"
        placeholder="Ex: John Doe"
      />
      <TextInputField
        name="profile.jobTitle"
        label="Job title *"
        placeholder="Ex: Software Developer"
      />
      <TextInputField
        name="profile.currentCity"
        label="Current city*"
        placeholder="Ex: Amsterdam"
      />
      <CountrySelect
        name={`profile.currentCountry`}
        label="Country *"
        component="select"
      />
      <TextInputField
        name="profile.email"
        label="E-mail *"
        placeholder="Ex: john.doe@gmail.com"
      />
      {/* <PhoneInputField name="profile.phone" label="Phone number" />  */}
      <div>
        <FormLabel>Select a profile picture</FormLabel>
        <FileUploadField name="profile.file" type="file" />
      </div>
      <br />
      <RadioButtonGroup name="profile.drivingLicense" label="driving license" />
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
        label="Write a little bit about yourself... *"
      />
    </div>
  );
}

export default ProfileSection;
