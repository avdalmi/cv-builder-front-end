import React, { useState } from "react";
import { FieldArray, Field, useField } from "formik";
import TextInputField from "../Form/TextInputField";
import { Button, FormControl, Rating } from "@mui/material";
import StarRating from "../Form/StarRating";

function SkillsSection({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <FieldArray
      name="skills"
      render={(arrayHelpers) => {
        return (
          <div>
            <h4>Add your relevant skills</h4>
            {props.initialValues.skills.map((skill, index) => (
              <div key={index} style={{ display: "flex" }}>
                <TextInputField
                  name={`skills[${index}].skillName`}
                  placeholder="Ex: React"
                  label="Skill"
                />
                <Field name={`skills[${index}].skillLevel`} as={StarRating} />
                {/* <Field
                  style={{ width: 200 }}
                  type="number"
                  max={5}
                  min={0}
                  name={`skills[${index}].skillLevel`}
                /> */}
                {/* <FormControl>
                  <Field
                    as={
                      <Rating
                        name={`skills[${index}].skillLevel`}
                        controlled="true"
                        precision={0.5}
                        value={value}
                        onChange={(e, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    }
                  />
                </FormControl> */}

                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    arrayHelpers.remove(index); //removes from the final value
                    props.initialValues.skills.splice(index, 1); //removes locally, UI only
                  }}
                >
                  remove skill
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                arrayHelpers.push({ skillName: "", skillLevel: 0 });
                props.initialValues.skills.push({
                  skillName: "",
                  skillLevel: 0,
                });
              }}
            >
              Add another skill
            </Button>
          </div>
        );
      }}
    />
  );
}

export default SkillsSection;
