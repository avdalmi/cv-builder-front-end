import React from "react";
import { Field, FieldArray } from "formik";
import TextInputField from "../Form/TextInputField/TextInputField";
import FileUploadField from "../Form/FileUploadField/FileUploadField";
import { Button, FormLabel } from "@mui/material";
import DeleteButton from "../Form/DeleteButton/DeleteButton";
import AddButton from "../Form/AddButton/AddButton";

function CertificatesSection(props) {
  return (
    <FieldArray
      name="licensesAndCertifications"
      render={(arrayHelpers) => {
        return (
          <div style={{ width: 500, margin: "0 auto" }}>
            <h4>Add your licenses and certifications</h4>
            {props.initialValues.licensesAndCertifications.map((edu, index) => (
              <div key={index} style={{ margin: "20px" }}>
                <TextInputField
                  name={`licensesAndCertifications[${index}].certInstituteName`}
                  placeholder="Ex: Techmongers"
                  label="Issuing organisation *"
                />
                <TextInputField
                  name={`licensesAndCertifications[${index}].certTitle`}
                  placeholder="Ex: JavaScript Full Stack Developer"
                  label="Title *"
                />
                <TextInputField
                  name={`licensesAndCertifications[${index}].certCredentialID`}
                  label="Certification credential ID"
                />
                <TextInputField
                  name={`licensesAndCertifications[${index}].certCredentialURL`}
                  label="Certification credential URL"
                />
                <FormLabel>Issue date *</FormLabel>
                <TextInputField
                  name={`licensesAndCertifications[${index}].certIssueDate`}
                  type="date"
                />
                <FormLabel>Expiration date</FormLabel>
                <TextInputField
                  name={`licensesAndCertifications[${index}].certExpirationDate`}
                  placeholder="Expiration date"
                  type="date"
                />
                <Field
                  name={`licensesAndCertifications[${index}].certUpload`}
                  as={FileUploadField}
                  label="Select a file to upload"
                  filetype="file"
                />

                <DeleteButton
                  label="license or certification"
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.licensesAndCertifications.splice(
                      index,
                      1
                    );
                  }}
                />
              </div>
            ))}
            <AddButton
              label="Add another license or certificate"
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
                props.initialValues.licensesAndCertifications.push({
                  certTitle: "",
                  certInstituteName: "",
                  certIssueDate: "",
                  certExpirationDate: "",
                  certCredentialID: "",
                  certCredentialURL: "",
                  certUpload: "",
                });
              }}
            />
          </div>
        );
      }}
    />
  );
}

export default CertificatesSection;
