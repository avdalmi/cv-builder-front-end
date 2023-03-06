import React, { useState, useEffect } from "react";
import { FieldArray, Field, useField, useFormikContext } from "formik";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import CountrySelect from "../FormFields/CountrySelect/CountrySelect";
import LinkField from "../FormFields/LinkField/LinkField";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";
import ChipSelect from "../FormFields/ChipSelect/ChipSelect";
import {
  CharTextStyled,
  SectionContainer,
} from "../FormFields/styles/FormInputFields";

function ProjectsSection({ ...props }) {
  const [meta] = useField(props);

  return (
    <FieldArray
      name="projects"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <h4>Add your relevant projects</h4>

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
                          {props.initialValues.projects[index].projectLinks.map(
                            (link, index2) => (
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
                            )
                          )}
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
              label="Add another project"
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
          </SectionContainer>
        );
      }}
    />
  );
}

export default ProjectsSection;
