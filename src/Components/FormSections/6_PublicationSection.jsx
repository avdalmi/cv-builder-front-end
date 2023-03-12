import React from "react";
import TextInputField from "../FormFields/TextInputField/TextInputField";
import FileUploadField from "../FormFields/FileUploadField/FileUploadField";
import {
  Button,
  FormLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { FieldArray, useField } from "formik";
import LinkField from "../FormFields/LinkField/LinkField";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteButton from "../FormFields/DeleteButton/DeleteButton";
import AddButton from "../FormFields/AddButton/AddButton";
import {
  CharTextStyled,
  DeleteButtonContainer,
  SectionContainer,
  SectionSubContainer,
  SpanTitle,
} from "../FormFields/Styles/StyleSheet";

function PublicationSection({ ...props }) {
  const [meta] = useField(props);
  return (
    <FieldArray
      name="publications"
      render={(arrayHelpers) => {
        return (
          <SectionContainer>
            <SectionSubContainer>
              <Typography variant="h4">
                <SpanTitle>Publications</SpanTitle>
              </Typography>
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
                    <CharTextStyled>
                      {meta.value[index].pubDescription.length} / 300
                    </CharTextStyled>
                  </div>
                  <DeleteButtonContainer>
                    {" "}
                    <DeleteButton
                      label="publication"
                      onClick={() => {
                        arrayHelpers.remove(index);
                        props.initialValues.publications.splice(index, 1);
                      }}
                    />
                  </DeleteButtonContainer>
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
            </SectionSubContainer>
          </SectionContainer>
        );
      }}
    />
  );
}

export default PublicationSection;
