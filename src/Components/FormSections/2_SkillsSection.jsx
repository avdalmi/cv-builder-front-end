import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import { Button, Typography } from "@mui/material";
import StarRating from "../FormFields/StarRating/StarRating";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";
import {
  SectionSubContainer,
  SkillsContainer,
  SpanTitle,
  TitleTextStyled,
} from "../FormFields/Styles/StyleSheet";

function SkillsSection({ ...props }) {
  // console.log("props", props);
  return (
    <div>
      <FieldArray
        name="skills"
        render={(arrayHelpers) => {
          return (
            <SkillsContainer>
              <SectionSubContainer>
                <TitleTextStyled>
                  <Typography variant="h4">
                    <SpanTitle>Relevant skills</SpanTitle>{" "}
                  </Typography>
                  <p>(programming languages, frameworks, libraries)</p>
                </TitleTextStyled>
                {props.initialValues.skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      // backgroundColor: "yellow",
                      alignContent: "center",
                      alignItems: "center",
                      // justifyContent: "center",
                    }}
                  >
                    <TextInputField
                      name={`skills[${index}].skillName`}
                      placeholder="Ex: React"
                      label="Skill"
                      style={{ maxWidth: 100, marginRight: 20 }}
                    />

                    <Field
                      name={`skills[${index}].skillLevel`}
                      as={StarRating}
                    />

                    <DeleteButton
                      deleteitem={true}
                      onClick={() => {
                        arrayHelpers.remove(index);
                        props.initialValues.skills.splice(index, 1);
                      }}
                    />
                  </div>
                ))}

                <AddButton
                  label="Add another skill"
                  onClick={() => {
                    arrayHelpers.push({ skillName: "", skillLevel: 0 });
                    props.initialValues.skills.push({
                      skillName: "",
                      skillLevel: 0,
                    });
                  }}
                />
              </SectionSubContainer>
            </SkillsContainer>
          );
        }}
      />
    </div>
  );
}

export default SkillsSection;
