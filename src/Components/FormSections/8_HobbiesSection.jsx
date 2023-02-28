import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../Form/TextInputField";
import { Button } from "@mui/material";

function HobbiesSection(props) {
  return (
    <FieldArray
      name="hobbies"
      render={(arrayHelpers) => {
        return (
          <div>
            <h4>Add your relevant languagws</h4>
            {props.initialValues.hobbies.map((hob, index) => (
              <div key={index} style={{ display: "flex" }}>
                <TextInputField
                  name={`hobbies[${index}].hobby`}
                  placeholder="Ex: Football"
                  label="Hobby"
                />

                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.hobbies.splice(index, 1);
                  }}
                >
                  remove hobby
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                arrayHelpers.push({ hobby: "" });
                props.initialValues.hobbies.push({
                  hobby: "",
                });
              }}
            >
              Add another hobby
            </Button>
          </div>
        );
      }}
    />
  );
}

export default HobbiesSection;
// - Vrije tekst
