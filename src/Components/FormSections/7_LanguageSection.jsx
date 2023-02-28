import React from "react";
import { FieldArray, Field } from "formik";
import TextInputField from "../Form/TextInputField";
import { Button } from "@mui/material";
import { languageLevelOptions } from "../../Data/LanguageLevelOptions";

function LanguageSection(props) {
  return (
    <FieldArray
      name="languages"
      render={(arrayHelpers) => {
        return (
          <div style={{ width: 500, margin: "0 auto" }}>
            <h4>Add your relevant languages</h4>
            {props.initialValues.languages.map((language, index) => (
              <div key={index} style={{ display: "flex" }}>
                <TextInputField
                  name={`languages[${index}].languageName`}
                  placeholder="Ex: English"
                  label="Language"
                />

                <Field
                  component="select"
                  name={`languages.${index}.languageLevel`}
                >
                  {languageLevelOptions.map((item, index) => {
                    return (
                      <option
                        style={{ width: 400 }}
                        key={item.id}
                        value={item.name}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </Field>

                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.languages.splice(index, 1);
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
                arrayHelpers.push({ languageName: "", languageLevel: "" });
                props.initialValues.languages.push({
                  languageName: "",
                  languageLevel: "",
                });
              }}
            >
              Add another language
            </Button>
          </div>
        );
      }}
    />
  );
}

export default LanguageSection;
