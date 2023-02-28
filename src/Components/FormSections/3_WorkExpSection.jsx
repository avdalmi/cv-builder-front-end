import React from "react";
import { FieldArray, Field, useField } from "formik";
import TextInputField from "../Form/TextInputField";
import { FormControl, FormLabel, Button } from "@mui/material";
import CountrySelect from "../Form/CountrySelect";

function WorkExpSection({ ...props }) {
  const [meta, field] = useField(props);
  // console.log("props", props);
  // console.log("meta", meta);
  // console.log("field", field);

  const getName = (index, fieldTitle) => {
    if (index === 0) {
      return `workExperience[${index}].${fieldTitle}`;
    } else {
      return `[${index}].${fieldTitle}`;
    }
  };

  return (
    <FieldArray
      name="workExperience"
      render={(arrayHelpers) => {
        // console.log("helpers", arrayHelpers);
        return (
          <div style={{ width: 500, margin: "0 auto" }}>
            <h4>Add your work experience</h4>
            {props &&
              props.initialValues.workExperience.map((work, index) => {
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
                      // value={meta.value[index].workCity}
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
                    <br />
                    <br />
                    <FormControl>
                      <FormLabel
                        htmlFor={`workExperience[${index}].workCurrent`}
                      >
                        Do you currently work here?
                      </FormLabel>
                      <div
                        style={{
                          display: "flex",
                          // backgroundColor: "pink",
                          justifyContent: "center",
                        }}
                      >
                        <label>
                          <Field
                            type="radio"
                            name={`workExperience[${index}].workCurrent`}
                            value="true"
                          />
                          yes
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name={`workExperience[${index}].workCurrent`}
                            value="false"
                          />
                          no
                        </label>
                      </div>
                      <br />
                    </FormControl>{" "}
                    {meta.value[index].workCurrent === "false" ? (
                      <div>
                        <FormLabel>End date</FormLabel>
                        <TextInputField
                          name={`workExperience[${index}].workEndDate`}
                          type="date"
                        />
                      </div>
                    ) : (
                      <div value="false"></div>
                    )}
                    <br />
                    <br />
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
                  workCity: "",
                  workCountry: "",
                  workCompanyName: "",
                });
                props.initialValues.workExperience.push({
                  workStartDate: "",
                  workEndDate: "",
                  workCurrent: "false",
                  workPositionTitle: "",
                  workDescription: "",
                  workCity: "",
                  workCountry: "",
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
