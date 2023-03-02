import React from "react";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import FileUploadField from "../FormFields/FileUploadField/FileUploadField";
import { Button, FormLabel, styled, TextField } from "@mui/material";
import { FieldArray, useField } from "formik";
import LinkField from "../FormFields/LinkField/LinkField";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";

function PublicationSection({ ...props }) {
  const [meta] = useField(props);
  return (
    <FieldArray
      name="publications"
      render={(arrayHelpers) => {
        return (
          <div style={{ width: 500, margin: "0 auto" }}>
            <h4>Add your publications</h4>
            {props.initialValues.publications.map((pub, index) => (
              <div key={index} style={{ margin: "20px" }}>
                <TextInputField
                  name={`publications[${index}].pubTitle`}
                  placeholder="Ex: To Kill a Mockingbird"
                  label="Publication Title"
                />
                <TextInputField
                  name={`publications[${index}].pubPublisher`}
                  placeholder="Ex: Harvard Business Review"
                  label="Publication/Publisher"
                />

                <FormLabel>Publication date</FormLabel>
                <TextInputField
                  name={`publications[${index}].pubDate`}
                  type="date"
                />

                <LinkField
                  name={`publications[${index}].pubURL`}
                  placeholder="Ex: www.published.com/article-name"
                  label="Publication URL"
                />
                <div>
                  {" "}
                  <TextInputField
                    name={`publications[${index}].pubDescription`}
                    label="Description"
                    multiline
                    rows={3}
                    inputProps={{ maxLength: 300 }}
                  />
                  <p>{meta.value[index].pubDescription.length} / 300</p>
                </div>
                <DeleteButton
                  label="publication"
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.publications.splice(index, 1);
                  }}
                />
              </div>
            ))}
            <AddButton
              label="Add another publication"
              onClick={() => {
                arrayHelpers.push({
                  pubTitle: "",
                  pubPublisher: "",
                  pubDate: "",
                  pubURL: "",
                  pubDescription: "",
                });
                props.initialValues.publications.push({
                  pubTitle: "",
                  pubPublisher: "",
                  pubDate: "",
                  pubURL: "",
                  pubDescription: "",
                });
              }}
            />
          </div>
        );
      }}
    />
  );
}

export default PublicationSection;
