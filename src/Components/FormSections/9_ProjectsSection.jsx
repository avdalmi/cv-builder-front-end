import React from "react";
import { FieldArray, Field, useField, useFormikContext } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import TextInputField from "../Form/TextInputField";
import CountrySelect from "../Form/CountrySelect";

function ProjectsSection({ ...props }) {
  const { values } = useFormikContext();

  return (
    <FieldArray
      name="projects"
      render={(arrayHelpers) => {
        return (
          <div>
            <h4>Add your relevant projects</h4>

            {props.initialValues.projects.map((project, index) => (
              <div key={index}>
                <TextInputField
                  name={`projects[${index}].projectTitle`}
                  placeholder="Ex: Project X"
                  label="Project title"
                />

                <TextInputField
                  name={`projects[${index}].projectDescription`}
                  placeholder="Type something... "
                  multiline
                  rows={5}
                  label="Project description"
                />
                <TextInputField
                  name={`projects[${index}].projectCity`}
                  placeholder="Ex: Amsterdam"
                  label="City"
                />

                <CountrySelect
                  name={`projects[${index}].projectCountry`}
                  label="Country"
                  // component="select"
                  defaultValue=""
                />
                <br />
                <FormLabel>Completion date *</FormLabel>
                <TextInputField
                  name={`projects[${index}].projectDate`}
                  type="date"
                />

                <div>
                  <FieldArray
                    name={`projects[${index}].projectLinks`}
                    render={(arrayHelpers) => {
                      return (
                        <div>
                          <p>Add links to your project</p>
                          {props.initialValues.projects[index].projectLinks.map(
                            (link, index2) => (
                              <div key={index2}>
                                <TextInputField
                                  name={`projects[${index}].projectLinks[${index2}].projectLink]`}
                                  placeholder="Ex: github.com/username/projectname"
                                  label="Project link"
                                />

                                <Button
                                  type="button"
                                  variant="outlined"
                                  color="error"
                                  onClick={() => {
                                    arrayHelpers.remove(index2);
                                    props.initialValues.projects[
                                      index
                                    ].projectLinks.splice(index2, 1);
                                  }}
                                >
                                  remove link
                                </Button>
                              </div>
                            )
                          )}
                          <Button
                            type="button"
                            variant="outlined"
                            onClick={() => {
                              arrayHelpers.push({ projectLink: "" });
                              props.initialValues.projects[
                                index
                              ].projectLinks.push({
                                projectLink: "",
                              });
                            }}
                          >
                            Add another link
                          </Button>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <FieldArray
                    name={`projects[${index}].projectSkills`}
                    render={(arrayHelpers) => {
                      // console.log(arrayHelpers);
                      return (
                        <div>
                          <p>select the skills used in the project</p>
                          {props.initialValues.projects[
                            index
                          ].projectSkills.map((skill, index2) => (
                            <div key={index2}>
                              {/* <FormControl fullWidth>
                                <InputLabel id="select-skill">Skill</InputLabel>
                              <TextField
                                // labelId="select-skill"
                                component="select"
                                name={`projects[${index}].projectSkills[${index2}].projectSkill`}
                                defaultValue=""
                              >
                                {values &&
                                  values.skills.map((item, index3) => {
                                    // console.log("item", item);
                                    return (
                                      <MenuItem
                                        key={index3}
                                        value={item.skillName}
                                      >
                                        {item.skillName}
                                      </MenuItem>
                                    );
                                  })}
                              </TextField>
                              </FormControl> */}
                              <Field
                                component="select"
                                name={`projects.[${index}].projectSkills.[${index2}].projectSkill`}
                              >
                                <option value="" disabled>
                                  select skill
                                </option>
                                {values.skills.map((item, index3) => {
                                  return (
                                    <option
                                      style={{ width: 400 }}
                                      key={index3}
                                      value={item.skillName}
                                    >
                                      {item.skillName}
                                    </option>
                                  );
                                })}
                              </Field>

                              <Button
                                type="button"
                                variant="outlined"
                                color="error"
                                onClick={() => {
                                  arrayHelpers.remove(index2);
                                  props.initialValues.projects[
                                    index
                                  ].projectSkills.splice(index2, 1);
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
                              arrayHelpers.push({ projectSkill: "" });
                              props.initialValues.projects[
                                index
                              ].projectSkills.push({
                                projectSkill: "",
                              });
                            }}
                          >
                            Add another skill
                          </Button>
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
}

export default ProjectsSection;
