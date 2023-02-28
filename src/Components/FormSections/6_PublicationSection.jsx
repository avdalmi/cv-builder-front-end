import React from "react";
import TextInputField from "../Form/TextInputField";
import FileUploadField from "../Form/FileUploadField";
import { Button, FormLabel } from "@mui/material";
import { FieldArray, useField } from "formik";

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
                  // FormLabel="start date"
                />
                <TextInputField
                  name={`publications[${index}].pubURL`}
                  label="Publication URL"
                />
                <TextInputField
                  name={`publications[${index}].pubDescription`}
                  label="Description"
                  multiline
                  rows={3}
                  inputProps={{ maxLength: 300 }}
                />
                <p>{meta.value[index].pubDescription.length} / 300</p>
                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.publications.splice(index, 1);
                  }}
                >
                  remove publication
                </Button>
              </div>
            ))}
            <Button
              variant="outlined"
              type="button"
              onClick={() => {
                arrayHelpers.push({
                  certInstituteName: "",
                  certTitle: "",
                  certIssueDate: "",
                  certExpirationDate: "",
                  certCredentialID: "",
                  certCredentialURL: "",
                  certUpload: "",
                });
                props.initialValues.publications.push({
                  certTitle: "",
                  certInstituteName: "",
                  certIssueDate: "",
                  certExpirationDate: "",
                  certCredentialID: "",
                  certCredentialURL: "",
                  certUpload: "",
                });
              }}
            >
              Add another publication
            </Button>
          </div>
        );
      }}
    />
  );
}

export default PublicationSection;
