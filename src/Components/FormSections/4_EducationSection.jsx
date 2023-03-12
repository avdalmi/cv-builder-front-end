import React from "react";
import { Field, FieldArray, useField } from "formik";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import { InputLabel, Button, FormControl, Typography } from "@mui/material";
import CountrySelect from "../FormFields/CountrySelect/CountrySelect";
import FileUploadField from "../FormFields/FileUploadField/FileUploadField";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";
import {
  CharTextStyled,
  DeleteButtonContainer,
  SectionContainer,
  SpanTitle,
  SectionSubContainer,
} from "../FormFields/Styles/StyleSheet";

function EducationSection({ ...props }) {
  const [meta] = useField(props);
  // console.log("props", props);
  return (
    <FieldArray
      name="education"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <SectionSubContainer>
              <Typography variant="h4">
                <SpanTitle>Education</SpanTitle>
              </Typography>
              {props &&
                props.initialValues.education.map((edu, index) => (
                  <div key={index} style={{ margin: "2rem" }}>
                    <TextInputField
                      name={`education[${index}].eduSchoolName`}
                      placeholder="Ex: University of Amsterdam"
                      label="College/University name *"
                    />
                    <TextInputField
                      name={`education[${index}].eduDegreeTitle`}
                      placeholder="Ex: Bachelor's"
                      label="Degree *"
                    />
                    <TextInputField
                      name={`education[${index}].eduCity`}
                      placeholder="Ex: Amsterdam"
                      label="City *"
                    />

                    <CountrySelect
                      name={`education[${index}].eduCountry`}
                      label="Country *"
                      // defaultValue=""
                    />

                    <InputLabel>start date *</InputLabel>
                    <TextInputField
                      name={`education[${index}].eduStartDate`}
                      type="date"
                    />

                    <InputLabel>end date (or expected) *</InputLabel>
                    <TextInputField
                      name={`education[${index}].eduEndDate`}
                      placeholder="End date *"
                      type="date"
                    />
                    <Field
                      name={`education[${index}].eduFile`}
                      as={FileUploadField}
                      label="Select a file to upload"
                      filetype="file"
                    />
                    <TextInputField
                      placeholder="type something..."
                      name={`education[${index}].eduDescription`}
                      multiline
                      rows={3}
                      label="Write a little bit about what you learned... *"
                      inputProps={{ maxLength: 300 }}
                      id="preview"
                    />
                    <CharTextStyled>
                      {meta.value[index].eduDescription.length} / 300
                    </CharTextStyled>
                    <DeleteButtonContainer>
                      <DeleteButton
                        onClick={() => {
                          arrayHelpers.remove(index);
                          props.initialValues.education.splice(index, 1);
                        }}
                        label="education"
                      />
                    </DeleteButtonContainer>
                  </div>
                ))}
              <AddButton
                // style={{ margin: "0 auto" }}
                label="education"
                onClick={() => {
                  arrayHelpers.push({
                    eduSchoolName: "",
                    eduDegreeTitle: "",
                    eduCity: "",
                    eduCountry: "",
                    eduStartDate: "",
                    eduEndDate: "",
                    eduFile: "",
                    eduDescription: "",
                  });
                  props.initialValues.education.push({
                    eduSchoolName: "",
                    eduDegreeTitle: "",
                    eduCity: "",
                    eduCountry: "",
                    eduStartDate: "",
                    eduEndDate: "",
                    eduFile: "",
                    eduDescription: "",
                  });
                }}
              />
            </SectionSubContainer>
          </SectionContainer>
        );
      }}
    />
  );
}

export default EducationSection;
