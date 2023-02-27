import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../Form/TextInputField";
import { Button } from "@mui/material";

function SkillsSection(props) {
  // console.log(initialValues);
  return (
    <FieldArray
      name="skills"
      render={(arrayHelpers) => {
        // console.log("helpers", arrayHelpers);
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

                <TextInputField
                  type="number"
                  max={5}
                  min={0}
                  name={`skills[${index}].skillLevel`}
                />

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
