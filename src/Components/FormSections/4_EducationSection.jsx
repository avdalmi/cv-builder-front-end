import React from "react";
import { Field, FieldArray, useField } from "formik";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import { InputLabel, Button, FormControl } from "@mui/material";
import CountrySelect from "../FormFields/CountrySelect/CountrySelect";
import FileUploadField from "../FormFields/FileUploadField/FileUploadField";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";

function EducationSection({ ...props }) {
  const [meta] = useField(props);
  // console.log("props", props);
  return (
    <FieldArray
      name="education"
      render={(arrayHelpers) => {
        return (
          <div style={{ width: 500, margin: "0 auto" }}>
            <h4>Add your education</h4>
            {props &&
              props.initialValues.education.map((edu, index) => (
                <div key={index}>
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
                    defaultValue=""
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
                  <p>{meta.value[index].eduDescription.length} / 300</p>

                  <DeleteButton
                    onClick={() => {
                      arrayHelpers.remove(index);
                      props.initialValues.education.splice(index, 1);
                    }}
                    label="education"
                  />
                </div>
              ))}
            <AddButton
              label="Add another education"
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
          </div>
        );
      }}
    />
  );
}

export default EducationSection;
