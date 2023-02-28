import React from "react";
import { Field, FieldArray, useField } from "formik";
import TextInputField from "../Form/TextInputField";
import { InputLabel, Button, FormControl } from "@mui/material";
import CountrySelect from "../Form/CountrySelect";
import FileUploadField from "../Form/FileUploadField";

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
                <div key={index} style={{ margin: "20px" }}>
                  <TextInputField
                    name={`education[${index}].eduSchoolName`}
                    placeholder="Ex: University of Amsterdam"
                    style={{ margin: "10px" }}
                    label="College/University name *"
                  />
                  <TextInputField
                    name={`education[${index}].eduDegreeTitle`}
                    placeholder="Ex: Bachelor's"
                    style={{ margin: "10px" }}
                    label="Degree"
                  />
                  <TextInputField
                    name={`education[${index}].eduCity`}
                    placeholder="Ex: Amsterdam"
                    label="City *"
                    style={{ margin: "10px" }}
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
                    style={{ margin: "10px" }}
                  />

                  <InputLabel>end date (or expected) *</InputLabel>
                  <TextInputField
                    name={`education[${index}].eduEndDate`}
                    placeholder="End date *"
                    type="date"
                    style={{ margin: "10px" }}
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
                    label="Write a little bit about what you learned... max 300 characters*"
                    inputProps={{ maxLength: 300 }}
                  />
                  <p>{meta.value[index].eduDescription.length} / 300</p>
                  <Button
                    type="button"
                    color="error"
                    variant="outlined"
                    style={{ margin: "10px" }}
                    onClick={() => {
                      arrayHelpers.remove(index);
                      props.initialValues.education.splice(index, 1);
                    }}
                  >
                    remove education
                  </Button>
                </div>
              ))}
            <Button
              style={{ margin: "20px" }}
              type="button"
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
            >
              Add another education
            </Button>
          </div>
        );
      }}
    />
  );
}

export default EducationSection;
// - Periode
// - Instituut
// - Opleidingsnaam
