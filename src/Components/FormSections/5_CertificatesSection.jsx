import React from "react";
import { Field, FieldArray } from "formik";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import FileUploadField from "../FormFields/FileUploadField/FileUploadField";
import { Button, FormLabel, Typography } from "@mui/material";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";
import {
  DeleteButtonContainer,
  SectionContainer,
  SectionSubContainer,
  SpanTitle,
} from "../FormFields/Styles/StyleSheet";

function CertificatesSection(props) {
  return (
    <FieldArray
      name="licensesAndCertifications"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <SectionSubContainer>
              <Typography variant="h4">
                <SpanTitle>Licenses & Certifications</SpanTitle>
              </Typography>
              {props.initialValues.licensesAndCertifications.map(
                (edu, index) => (
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
                    <DeleteButtonContainer>
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
                    </DeleteButtonContainer>
                  </div>
                )
              )}
              <AddButton
                label="license or certificate"
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
            </SectionSubContainer>
          </SectionContainer>
        );
      }}
    />
  );
}

export default CertificatesSection;
