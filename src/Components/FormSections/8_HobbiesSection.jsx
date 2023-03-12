import React from "react";
import { FieldArray } from "formik";
import { Typography } from "@mui/material";
import { AddButton, DeleteButton, TextInputField } from "../FormFields/index";
import {
  SectionContainer,
  SectionSubContainer,
  SpanTitle,
} from "../FormFields/Styles/StyleSheet";

function HobbiesSection(props) {
  return (
    <FieldArray
      name="hobbies"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <SectionSubContainer>
              <Typography variant="h4">
                <SpanTitle>Hobbies</SpanTitle>
              </Typography>
              {props.initialValues.hobbies.map((hob, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "flex-end" }}
                >
                  <TextInputField
                    name={`hobbies[${index}]`}
                    placeholder="Ex: Football"
                    label="Hobby"
                  />
                  <DeleteButton
                    deleteitem={true}
                    onClick={() => {
                      arrayHelpers.remove(index);
                      props.initialValues.hobbies.splice(index, 1);
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="hobby"
                onClick={() => {
                  arrayHelpers.push("");
                  props.initialValues.hobbies.push("");
                }}
              />
            </SectionSubContainer>
          </SectionContainer>
        );
      }}
    />
  );
}

export default HobbiesSection;
