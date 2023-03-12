import React from "react";
import { FieldArray, useField } from "formik";
import { FormLabel, Typography } from "@mui/material";
import {
  ChipSelect,
  AddButton,
  DeleteButton,
  LinkField,
  CountrySelect,
  TextInputField,
} from "../FormFields/index";
import {
  CharTextStyled,
  SectionContainer,
  SectionSubContainer,
  SpanTitle,
} from "../FormFields/Styles/StyleSheet";

function ProjectsSection({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <FieldArray
      name="projects"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <SectionSubContainer>
              <Typography variant="h4">
                <SpanTitle>Projects</SpanTitle>
              </Typography>

              {props.initialValues.projects.map((project, index) => (
                <div key={index}>
                  <TextInputField
                    name={`projects[${index}].projectTitle`}
                    placeholder="Ex: Project X"
                    label="Project title *"
                  />

                  <TextInputField
                    name={`projects[${index}].projectCity`}
                    placeholder="Ex: Amsterdam"
                    label="City *"
                  />

                  <CountrySelect
                    name={`projects[${index}].projectCountry`}
                    label="Country *"
                  />

                  <div>
                    <FormLabel>Completion date *</FormLabel>
                    <TextInputField
                      name={`projects[${index}].projectDate`}
                      type="date"
                    />
                  </div>

                  <div>
                    <FieldArray
                      name={`projects[${index}].projectLinks`}
                      render={(arrayHelpers) => {
                        return (
                          <div>
                            <FormLabel>Add links to your project</FormLabel>
                            {props.initialValues.projects[
                              index
                            ].projectLinks.map((link, index2) => (
                              <div
                                key={index2}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <LinkField
                                  name={`projects[${index}].projectLinks[${index2}]`}
                                  placeholder="Ex: github.com/username/projectname"
                                  label={
                                    index2 >= 1
                                      ? "Project link"
                                      : "Project link *"
                                  }
                                />
                                {index2 >= 1 && (
                                  <DeleteButton
                                    deleteitem={true}
                                    onClick={() => {
                                      arrayHelpers.remove(index2);
                                      props.initialValues.projects[
                                        index
                                      ].projectLinks.splice(index2, 1);
                                    }}
                                  />
                                )}
                              </div>
                            ))}
                            <div style={{ textAlign: "center" }}>
                              <AddButton
                                label="Add another link"
                                onClick={() => {
                                  arrayHelpers.push("");
                                  props.initialValues.projects[
                                    index
                                  ].projectLinks.push("");
                                }}
                              />
                            </div>
                          </div>
                        );
                      }}
                    />
                  </div>
                  <div>
                    <TextInputField
                      name={`projects[${index}].projectDescription`}
                      placeholder="Type something... "
                      multiline
                      rows={5}
                      label="Project description *"
                      inputProps={{ maxLength: 300 }}
                    />
                    <CharTextStyled>
                      {meta.value[index].projectDescription.length} / 300
                    </CharTextStyled>
                  </div>
                  <div>
                    <FieldArray
                      name={`projects[${index}].projectSkills`}
                      render={(arrayHelpers) => {
                        return (
                          <div>
                            {props.initialValues.projects[
                              index
                            ].projectSkills.map((skill, index2) => (
                              <div key={index2}>
                                <ChipSelect
                                  name={`projects[${index}].projectSkills[${index2}]`}
                                  label="Chip select main"
                                />
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    />
                  </div>
                </div>
              ))}
              <AddButton
                label="project"
                onClick={() => {
                  arrayHelpers.push({
                    projectTitle: "",
                    projectDescription: "",
                    projectCity: "",
                    projectCountry: "",
                    projectDate: "",
                    projectLinks: [""],
                    projectSkills: [""],
                  });
                  props.initialValues.projects.push({
                    projectTitle: "",
                    projectDescription: "",
                    projectCity: "",
                    projectCountry: "",
                    projectDate: "",
                    projectLinks: [""],
                    projectSkills: [""],
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

export default ProjectsSection;
