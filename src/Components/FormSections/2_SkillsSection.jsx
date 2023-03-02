import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../Form/TextInputField";
import { Button } from "@mui/material";
import StarRating from "../Form/StarRating";
import DeleteButton from "../Form/DeleteButton";

function SkillsSection({ ...props }) {
  // console.log("props", props);
  return (
    <FieldArray
      name="skills"
      render={(arrayHelpers) => {
        return (
          <div style={{ width: 500, margin: "0 auto" }}>
            <h4>Add your relevant skills </h4>
            <p>(programming languages, frameworks, libraries)</p>
            {props.initialValues.skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  //  backgroundColor: "yellow"
                }}
              >
                <TextInputField
                  name={`skills[${index}].skillName`}
                  placeholder="Ex: React"
                  label="Skill"
                />

                <Field name={`skills[${index}].skillLevel`} as={StarRating} />

                <DeleteButton
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.skills.splice(index, 1);
                  }}
                  label="remove skill"
                />
                {/* <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.skills.splice(index, 1);
                  }}
                >
                  remove skill
                </Button> */}
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
