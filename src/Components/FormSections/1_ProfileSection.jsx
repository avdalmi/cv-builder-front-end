import React from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import TextInputField from "../Form/TextInputField";
import FormLabel from "@mui/material/FormLabel";
import FileUploadField from "../Form/FileUploadField";
import SelectField from "../Form/SelectField";
import CountrySelect from "../Form/CountrySelect";
import RadioButtonGroup from "../Form/RadioGroup";
import { Field, useField, useFormik } from "formik";
import { Link, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import LinkField from "../Form/LinkField";
import { drivingLicenseOptions } from "../../Data/DrivingLicenseOptions";

function ProfileSection({ ...props }) {
  const [meta, field] = useField(props);
  // console.log("meta: ", meta.value.drivingLicense);
  // console.log("props", props);
  const validate = props.validate;
  // const formikProps = useFormik({
  //   props,
  // });

  // console.log("formikprosp", formikProps);
  const isRequired = (message) => (value) => !!value ? undefined : message;
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
      <CountrySelect name={`profile.currentCountry`} label="Country *" />

      <br />
      <RadioButtonGroup
        name="profile.drivingLicense.hasDrivingLicense"
        label="driving license"
      />

      <br />

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
          label="select your first result"
        />

        <SelectField
          name="profile.brainsFirst.resultTwo"
          options={brainFirstOptions}
          label="select your second result"
        />

        <SelectField
          name="profile.brainsFirst.resultThree"
          options={brainFirstOptions}
          // label="result"
          label="select your third result"
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
