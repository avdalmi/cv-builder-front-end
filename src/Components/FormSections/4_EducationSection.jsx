import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../Form/TextInputField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { InputLabel, FormHelperText } from "@mui/material";

function EducationSection(props) {
  return (
    <FieldArray
      name="education"
      render={(arrayHelpers) => {
        // console.log("helpers", arrayHelpers);
        return (
          <div
            style={{
              border: "1px solid grey",
              margin: "10px",
              borderRadius: "15px",
            }}
          >
            <h4>Add your education</h4>
            {props.initialValues.education.map((edu, index) => (
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
                  name={`education[${index}].eduLocation`}
                  placeholder="Ex: Amsterdam"
                  label="Location *"
                  style={{ margin: "10px" }}
                />
                <InputLabel>start date *</InputLabel>
                <TextInputField
                  name={`education[${index}].eduStartDate`}
                  type="date"
                  // InputLabel="start date"
                  style={{ margin: "10px" }}
                />
                <InputLabel>end date (or expected) *</InputLabel>
                <TextInputField
                  name={`education[${index}].eduEndDate`}
                  placeholder="End date *"
                  type="date"
                  style={{ margin: "10px" }}
                />
                {/* <FormControl>
                  <FormLabel htmlFor={`education[${index}].educationCurrent`}>
                    do you currently study here?
                  </FormLabel>
                  <Field
                    type="radio"
                    name={`education[${index}].educationCurrent`}
                    value="true"
                  />
                  yes
                  <Field
                    type="radio"
                    name={`education[${index}].educationCurrent`}
                    value="false"
                  />
                  no
                </FormControl>{" "} */}
                <TextInputField
                  placeholder="type something..."
                  name={`education[${index}].eduDescription`}
                  multiline
                  rows={3}
                  label="Write a little bit about what you learned... max 300 characters*"
                  inputProps={{ maxLength: 300 }}
                />
                <button
                  type="button"
                  style={{ margin: "10px" }}
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.education.splice(index, 1);
                  }}
                >
                  remove education
                </button>
              </div>
            ))}
            <button
              style={{ margin: "20px" }}
              type="button"
              onClick={() => {
                arrayHelpers.push({
                  eduSchoolName: "",
                  eduDegreeTitle: "",
                  eduLocation: "",
                  eduStartDate: "",
                  eduEndDate: "",
                  eduCurrent: "false",
                  eduDescription: "",
                });
                props.initialValues.eduation.push({
                  eduSchoolName: "",
                  eduDegreeTitle: "",
                  eduLocation: "",
                  eduStartDate: "",
                  eduEndDate: "",
                  eduCurrent: "false",
                  eduDescription: "",
                });
              }}
            >
              Add another education
            </button>
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
