import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../Form/TextInputField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function WorkExpSection(props) {
  // console.log("props", props);
  return (
    <FieldArray
      name="workExperience"
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
            <h4>Add your work experience</h4>
            {props.initialValues.workExperience.map((skill, index) => (
              <div key={index} style={{ margin: "20px" }}>
                <TextInputField
                  name={`workExperience[${index}].workPositionTitle`}
                  placeholder="Job title *"
                  style={{ margin: "10px" }}
                />
                <TextInputField
                  name={`workExperience[${index}].workCompanyName`}
                  placeholder="Company name *"
                  style={{ margin: "10px" }}
                />
                <TextInputField
                  name={`workExperience[${index}].workLocation`}
                  placeholder="Where was it located? *"
                  style={{ margin: "10px" }}
                />
                <label>start date *</label>
                <TextInputField
                  name={`workExperience[${index}].workPeriodStart`}
                  type="date"
                  // label="start date"
                  style={{ margin: "10px" }}
                />
                <label>end date *</label>
                <TextInputField
                  name={`workExperience[${index}].workPeriodEnd`}
                  placeholder="End date *"
                  type="date"
                  style={{ margin: "10px" }}
                />
                <FormControl>
                  <FormLabel htmlFor={`workExperience[${index}].workCurrent`}>
                    do you currently work here?
                  </FormLabel>
                  <Field
                    type="radio"
                    name={`workExperience[${index}].workCurrent`}
                    value="true"
                  />
                  yes
                  <Field
                    type="radio"
                    name={`workExperience[${index}].workCurrent`}
                    value="false"
                  />
                  no
                </FormControl>{" "}
                <TextInputField
                  placeholder="type something..."
                  name={`workExperience[${index}].workDescription`}
                  multiline
                  rows={5}
                  label="Write a little bit about what you did and what you have achieved... *"
                />
                <button
                  type="button"
                  style={{ margin: "10px" }}
                  onClick={() => {
                    arrayHelpers.remove(index); //removes from the final value
                    props.initialValues.workExperience.splice(index, 1); //removes locally, UI only
                  }}
                >
                  remove work experience
                </button>
              </div>
            ))}
            <button
              style={{ margin: "20px" }}
              type="button"
              onClick={() => {
                arrayHelpers.push({
                  workPeriodStart: "",
                  workPeriodEnd: "",
                  workCurrent: "false",
                  workPositionTitle: "",
                  workDescription: "",
                  workLocation: "",
                  workCompanyName: "",
                });
                props.initialValues.workExperience.push({
                  workPeriodStart: "",
                  workPeriodEnd: "",
                  workCurrent: "false",
                  workPositionTitle: "",
                  workDescription: "",
                  workLocation: "",
                  workCompanyName: "",
                });
              }}
            >
              Add another work experience
            </button>
          </div>
        );
      }}
    />
  );
}

export default WorkExpSection;
// ## Werkervaring
// - Periode
// - Titel
// - Tekst
// - Logo
// - Vaardigheden
