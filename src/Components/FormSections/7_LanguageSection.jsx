import React from "react";
import { FieldArray } from "formik";
import { Typography } from "@mui/material";
import { languageLevelOptions } from "../../Data/LanguageLevelOptions";
import {
  AddButton,
  DeleteButton,
  SelectField,
  TextInputField,
} from "../FormFields/index";
import {
  DeleteButtonContainer,
  SectionContainer,
  SectionSubContainer,
  SpanTitle,
} from "../FormFields/Styles/StyleSheet";

function LanguageSection(props) {
  return (
    <FieldArray
      name="languages"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <SectionSubContainer>
              <Typography variant="h4">
                <SpanTitle>Languages</SpanTitle>
              </Typography>
              {props.initialValues.languages.map((language, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    // justifyContent: "flex-start",
                  }}
                >
                  <TextInputField
                    name={`languages[${index}].languageName`}
                    placeholder="Ex: English"
                    label="Language"
                    style={{
                      width: "200px",
                      margin: "5px",
                    }}
                  />
                  <SelectField
                    sx={{ maxWidth: "200px" }}
                    name={`languages.${index}.languageLevel`}
                    options={languageLevelOptions}
                    label="Level"
                    disabledtext="Select language level"
                  />

                  <DeleteButtonContainer>
                    <DeleteButton
                      onClick={() => {
                        arrayHelpers.remove(index);
                        props.initialValues.languages.splice(index, 1);
                      }}
                      label="remove skill"
                      deleteitem={true}
                    />
                  </DeleteButtonContainer>
                </div>
              ))}
              <AddButton
                onClick={() => {
                  arrayHelpers.push({ languageName: "", languageLevel: "" });
                  props.initialValues.languages.push({
                    languageName: "",
                    languageLevel: "",
                  });
                }}
                label="language"
              />
            </SectionSubContainer>
          </SectionContainer>
        );
      }}
    />
  );
}

export default LanguageSection;
