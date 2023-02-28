import React from "react";
import { FieldArray, Field, useField } from "formik";
import TextInputField from "../Form/TextInputField";
import { FormControl, FormLabel, Button } from "@mui/material";
import CountrySelect from "../Form/CountrySelect";

function WorkExpSection({ ...props }) {
  const [meta] = useField(props);

  return (
    <FieldArray
      name="workExperience"
      render={(arrayHelpers) => {
        // console.log("helpers", arrayHelpers);
        return (
          <div>
            <h4>Add your work experience</h4>
            {props.initialValues.workExperience.map((work, index) => {
              // const currentWork = field.value.workExperience.workCurrent;
              return (
                <div key={index} style={{ margin: "20px" }}>
                  <TextInputField
                    name={`workExperience[${index}].workPositionTitle`}
                    label="Job title *"
                    placeholder="Ex: Full Stack Developer"
                  />
                  <TextInputField
                    name={`workExperience[${index}].workCompanyName`}
                    label="Company name *"
                    placeholder="Ex: Building Heroes"
                  />
                  <TextInputField
                    name={`workExperience[${index}].workCity`}
                    label="City *"
                    placeholder="Ex: Amsterdam"
                  />
                  <CountrySelect
                    name={`workExperience[${index}].workCountry`}
                    label="Country *"
                    defaultValue=""
                  />
                  <FormLabel>Start date *</FormLabel>
                  <TextInputField
                    name={`workExperience[${index}].workStartDate`}
                    type="date"
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
                  {/* {currentWork !== "false" ? (
                    <h1>show end date</h1>
                  ) : (
                    <h1>hide enddate</h1>
                  )} */}
                  <br />
                  <br />
                  <FormLabel>End date</FormLabel>
                  <TextInputField
                    name={`workExperience[${index}].workEndDate`}
                    type="date"
                  />
                  <TextInputField
                    placeholder="type something..."
                    name={`workExperience[${index}].workDescription`}
                    multiline
                    rows={5}
                    label="Write a little bit about what you did and what you have achieved... max 300 characters *"
                    inputProps={{ maxLength: 300 }}
                  />
                  <p>{meta.value[index].workDescription.length} / 300</p>
                  <Button
                    type="button"
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      arrayHelpers.remove(index); //removes from the final value
                      props.initialValues.workExperience.splice(index, 1); //removes locally, UI only
                    }}
                  >
                    remove work experience
                  </Button>
                </div>
              );
            })}
            <Button
              variant="outlined"
              type="button"
              onClick={() => {
                arrayHelpers.push({
                  workStartDate: "",
                  workEndDate: "",
                  workCurrent: "false",
                  workPositionTitle: "",
                  workDescription: "",
                  workLocation: "",
                  workCompanyName: "",
                });
                props.initialValues.workExperience.push({
                  workStartDate: "",
                  workEndDate: "",
                  workCurrent: "false",
                  workPositionTitle: "",
                  workDescription: "",
                  workLocation: "",
                  workCompanyName: "",
                });
              }}
            >
              Add another work experience
            </Button>
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
