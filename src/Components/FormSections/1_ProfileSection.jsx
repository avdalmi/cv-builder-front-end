import React from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import TextInputField from "../Form/TextInputField";
import FormLabel from "@mui/material/FormLabel";
import FileUploadField from "../Form/FileUploadField";
import SelectField from "../Form/SelectField";
import CountrySelect from "../Form/CountrySelect";
import RadioButtonGroup from "../Form/RadioGroup";
import { useField } from "formik";

function ProfileSection({ ...props }) {
  const [meta] = useField(props);

  return (
    <div style={{ width: 500, margin: "0 auto" }}>
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

      <div>
        <FormLabel>Select a profile picture</FormLabel>
        <FileUploadField name="profile.file" type="file" />
      </div>
      <br />
      <RadioButtonGroup name="profile.drivingLicense" label="driving license" />

      <TextInputField
        name={`profile.githubLink`}
        placeholder="Ex: github.com/username"
        label="GitHub link *"
      />
      <TextInputField
        name={`profile.linkedInLink`}
        placeholder="Ex: linkedin.com/username"
        label="LinkedIn link *"
      />
      <TextInputField
        name={`profile.portfolioLink`}
        placeholder="Ex: www.portfolio.com"
        label="Portfolio link *"
      />
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
        inputProps={{ maxLength: 500 }}
      />
      <p>{meta.value.introductionText.length} / 500</p>
    </div>
  );
}

export default ProfileSection;
