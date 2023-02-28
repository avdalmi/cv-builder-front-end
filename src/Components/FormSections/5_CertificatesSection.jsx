import React from "react";
import { Field, FieldArray } from "formik";
import TextInputField from "../Form/TextInputField";
import FileUploadField from "../Form/FileUploadField";
import { Button, FormLabel } from "@mui/material";

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
                <FileUploadField
                  name={`licensesAndCertifications[${index}].certUpload`}
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
                  remove license or certification
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
