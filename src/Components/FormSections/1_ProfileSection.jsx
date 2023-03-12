import React from "react";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";
import {
  TextInputField,
  FileUploadField,
  SelectField,
  CountrySelect,
  RadioButtonGroup,
  LinkField,
} from "../FormFields/index";
import { Field, useField } from "formik";
import { FormLabel, Typography } from "@mui/material";
import {
  CharTextStyled,
  SectionContainer,
  SectionSubContainer,
  SpanTitle,
  TitleTextStyled,
} from "../FormFields/Styles/StyleSheet";

function ProfileSection({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <SectionContainer>
      <SectionSubContainer>
        <TitleTextStyled>
          <Typography variant="h4">
            <SpanTitle>Profile</SpanTitle>
          </Typography>
        </TitleTextStyled>

        <div style={{ padding: "2rem" }}>
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
            label="Current city *"
            placeholder="Ex: Amsterdam"
          />
          <div>
            <CountrySelect name={`profile.currentCountry`} label="Country *" />
          </div>
          <Field
            name={`profile.file`}
            as={FileUploadField}
            label="Select a profile picture"
            filetype="image"
          />
          <RadioButtonGroup
            name="profile.drivingLicense.hasDrivingLicense"
            label="driving license"
          />
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
          <div style={{ margin: "15px 0" }}>
            <FormLabel
              htmlFor="profile.brainsFirst"
              style={{ fontWeight: 600 }}
            >
              Select your three BrainsFirst Results:
            </FormLabel>

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
              label="select your third result"
            />
          </div>
          <div>
            <TextInputField
              placeholder="type something..."
              name="profile.introductionText"
              multiline
              rows={5}
              label="Write a little bit about yourself... *"
              inputProps={{ maxLength: 500 }}
            />
            <CharTextStyled variant="caption">
              {meta.value.introductionText.length} / 500
            </CharTextStyled>
          </div>
        </div>
      </SectionSubContainer>
    </SectionContainer>
  );
}

export default ProfileSection;
