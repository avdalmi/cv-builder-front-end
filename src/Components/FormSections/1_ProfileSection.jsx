import React from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import TextInputField from "../Form/TextInputField";
import FormLabel from "@mui/material/FormLabel";
import FileUploadField from "../Form/FileUploadField";
import SelectField from "../Form/SelectField";
import CountrySelect from "../Form/CountrySelect";
import RadioButtonGroup from "../Form/RadioGroup";
import { Field, useField } from "formik";
import { Link, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import LinkField from "../Form/LinkField";

function ProfileSection({ ...props }) {
  const [meta] = useField(props);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
      <br />
      <br />
      <CountrySelect
        name={`profile.currentCountry`}
        label="Country *"
        component="select"
      />

      <Field
        name={`profile.file`}
        as={FileUploadField}
        label="Select a profile picture"
        filetype="image"
      />

      <br />
      <RadioButtonGroup name="profile.drivingLicense" label="driving license" />
      <br />
      {/* <TextInputField
        name={`profile.githubLink`}
        placeholder="Ex: github.com/username"
        label="GitHub link *"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Link />
            </InputAdornment>
          ),
        }}
      /> */}
      <LinkField
        name={`profile.githubLink`}
        placeholder="Ex: github.com/username"
        label="GitHub link *"
      />

      <LinkField
        name={`profile.linkedInLink`}
        placeholder="Ex: linkedin.com/username"
        label="LinkedIn link *"
      />
      <LinkField
        name={`profile.portfolioLink`}
        placeholder="Ex: www.portfolio.com"
        label="Portfolio link"
      />
      <div>
        <FormLabel htmlFor="profile.brainsFirst">
          Select your three BrainsFirst Results:
        </FormLabel>
        <br />
        <SelectField
          name="profile.brainsFirst.resultOne"
          options={brainFirstOptions}
          disabledtext="select your first result"
        />

        <SelectField
          name="profile.brainsFirst.resultTwo"
          options={brainFirstOptions}
          disabledtext="select your second result"
        />

        <SelectField
          name="profile.brainsFirst.resultThree"
          options={brainFirstOptions}
          label="result"
          disabledtext="select your third result"
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
