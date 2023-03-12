import React from "react";
import { FieldArray, Field, useField } from "formik";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import { FormControl, FormLabel, Button, Typography } from "@mui/material";
import CountrySelect from "../FormFields/CountrySelect/CountrySelect";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";
import {
  CharTextStyled,
  DeleteButtonContainer,
  FormControlStyled,
  SectionContainer,
  SectionSubContainer,
  SpanTitle,
  TitleTextStyled,
  WorkContainer,
  WorkFormControl,
} from "../FormFields/Styles/StyleSheet";

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
        return (
          <SectionContainer>
            <SectionSubContainer>
              <TitleTextStyled>
                <Typography variant="h4">
                  <SpanTitle>Work experience</SpanTitle>
                </Typography>
              </TitleTextStyled>

              {props &&
                props.initialValues.workExperience.map((work, index) => {
                  return (
                    <div key={index} style={{ padding: "2rem" }}>
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

                      <FormLabel style={{ textAlign: "left" }}>
                        Start date *
                      </FormLabel>

                      <TextInputField
                        name={`workExperience[${index}].workStartDate`}
                        type="date"
                      />

                      <WorkFormControl>
                        <FormLabel
                          htmlFor={`workExperience[${index}].workCurrent`}
                        >
                          Do you currently work here?
                        </FormLabel>
                        <div>
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
                      </WorkFormControl>
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
                      <TextInputField
                        placeholder="type something..."
                        name={`workExperience[${index}].workDescription`}
                        multiline
                        rows={5}
                        label="Write a little bit about what you did and your achievements... *"
                        inputProps={{ maxLength: 300 }}
                      />
                      <CharTextStyled>
                        {meta.value[index].workDescription.length} / 300
                      </CharTextStyled>
                      <DeleteButtonContainer>
                        <DeleteButton
                          onClick={() => {
                            arrayHelpers.remove(index);
                            props.initialValues.workExperience.splice(index, 1);
                          }}
                          label="work experience"
                        />
                      </DeleteButtonContainer>
                    </div>
                  );
                })}
              <AddButton
                label="Add another work experience"
                style={{ textAlign: "center" }}
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
              />
            </SectionSubContainer>
          </SectionContainer>
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
