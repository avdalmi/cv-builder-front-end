import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import { Button } from "@mui/material";
import AddButton from "../FormFields/AddButton/AddButton";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import { SectionContainer } from "../FormFields/styles/FormInputFields";

function HobbiesSection(props) {
  return (
    <FieldArray
      name="hobbies"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <h4>Add your hobbies</h4>
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
              label="Add another hobby"
              onClick={() => {
                arrayHelpers.push("");
                props.initialValues.hobbies.push("");
              }}
            />
          </SectionContainer>
        );
      }}
    />
  );
}

export default HobbiesSection;
// - Vrije tekst
