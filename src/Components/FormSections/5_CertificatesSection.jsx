import React from "react";
import { Field, FieldArray } from "formik";
import TextInputField from "../Form/TextInputField";
import FileUploadField from "../Form/FileUploadField";
import { Button, FormLabel } from "@mui/material";

function CertificatesSection(props) {
  // console.log("props", props);
  return (
    <FieldArray
      name="licensesAndCertifications"
      render={(arrayHelpers) => {
        // console.log("helpers", arrayHelpers);
        return (
          <div>
            <h4>Add your licenses and certifications</h4>
            {props.initialValues.licensesAndCertifications.map((edu, index) => (
              <div key={index} style={{ margin: "20px" }}>
                <TextInputField
                  name={`licensesAndCertifications[${index}].certificateInstituteName`}
                  placeholder="Ex: Techmongers"
                  label="Issuing organisation *"
                />
                <TextInputField
                  name={`licensesAndCertifications[${index}].certificateTitle`}
                  placeholder="Ex: JavaScript Full Stack Developer"
                  label="Title *"
                />
                <TextInputField
                  name={`licensesAndCertifications[${index}].certificateCredentialID`}
                  label="Certificate credential ID"
                />
                <TextInputField
                  name={`licensesAndCertifications[${index}].certificateCredentialURL`}
                  label="Certificate credential URL"
                />
                <FormLabel>Issue date *</FormLabel>
                <TextInputField
                  name={`licensesAndCertifications[${index}].certificateIssueDate`}
                  type="date"
                  // FormLabel="start date"
                />
                <FormLabel>Expiration date</FormLabel>
                <TextInputField
                  name={`licensesAndCertifications[${index}].certificateExpirationDate`}
                  placeholder="Expiration date"
                  type="date"
                />
                <FileUploadField
                  name={`licensesAndCertifications[${index}].certificateUpload`}
                  type="file"
                />
                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    arrayHelpers.remove(index);
                    props.initialValues.licensesAndCertifications.splice(
                      index,
                      1
                    );
                  }}
                >
                  remove license or certificate
                </Button>
              </div>
            ))}
            <Button
              variant="outlined"
              type="button"
              onClick={() => {
                arrayHelpers.push({
                  certificateInstituteName: "",
                  certificateTitle: "",
                  certificateIssueDate: "",
                  certificateExpirationDate: "",
                  certificateCredentialID: "",
                  certificateCredentialURL: "",
                  certificateUpload: "",
                });
                props.initialValues.licensesAndCertifications.push({
                  certificateTitle: "",
                  certificateInstituteName: "",
                  certificateIssueDate: "",
                  certificateExpirationDate: "",
                  certificateCredentialID: "",
                  certificateCredentialURL: "",
                  certificateUpload: "",
                });
              }}
            >
              Add another license or certificate
            </Button>
          </div>
        );
      }}
    />
  );
}

export default CertificatesSection;
// - Periode
// - Instituut
// - Opleidingsnaam
// - Cijfer?
