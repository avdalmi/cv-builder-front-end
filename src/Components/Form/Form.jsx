import React from "react";
import { FormContainer, QuestionContainer } from "../../Styles/Form";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";

function InputForm() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const array = [];

  const onSubmit = async (values) => {
    await sleep(300);
    array.push(values);
    // window.alert(JSON.stringify(values, 0, 2));
    console.log(JSON.stringify(values, 0, 2));
    // console.log(array);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* personal profile data */}
            <div>
              <h1>Personal Information</h1>
              <QuestionContainer>
                <label>Full Name</label>
                <Field
                  name="fullName"
                  component="input"
                  type="text"
                  placeholder="Full name"
                />
              </QuestionContainer>

              <QuestionContainer>
                <label>Job title</label>
                <Field
                  name="profile.jobTitle"
                  component="input"
                  type="text"
                  placeholder="Job title"
                />
              </QuestionContainer>

              <QuestionContainer>
                <label>Current location</label>
                <Field
                  name="profile.currentLocation"
                  component="input"
                  type="text"
                  placeholder="Current location"
                />
              </QuestionContainer>

              <QuestionContainer>
                <label>E-mail</label>
                <Field
                  name="profile.email"
                  component="input"
                  type="text"
                  placeholder="email"
                />
              </QuestionContainer>

              {/* <QuestionContainer>
              <label>Profile picture</label>
              <Field
                name="profile.picture"
                component="input"
                type="text"
                placeholder=""
              />
            </QuestionContainer> */}
              {/* <FileField name="files" /> */}
              <QuestionContainer>
                <label>
                  Do you have a driving license? (check box for yes)
                </label>
                <Field
                  name="profile.drivinglicense"
                  component="input"
                  type="checkbox"
                />
              </QuestionContainer>

              <QuestionContainer>
                <label>Select your top three Brain First Results</label>
                <br />
                <label>Result 1</label>
                <Field name="profile.brainFirst.one" component="select">
                  <option />
                  {brainFirstOptions.map((option) => {
                    return (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    );
                  })}
                </Field>
                <br />
                <label>Result 2</label>
                <Field name="profile.brainFirst.two" component="select">
                  <option />
                  {brainFirstOptions.map((option) => {
                    return (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    );
                  })}
                </Field>
                <br />
                <label>Result 3</label>
                <Field name="profile.brainFirst.three" component="select">
                  <option />
                  {brainFirstOptions.map((option) => {
                    return (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    );
                  })}
                </Field>
              </QuestionContainer>

              <QuestionContainer>
                <label>Write a short introduction</label>
                <br />
                <Field
                  name="profile.introduction"
                  component="textarea"
                  placeholder="introduction text"
                ></Field>
              </QuestionContainer>
            </div>
            {/* Skills/tools */}
            {/* <div>
              <h1>Skills</h1>
              <div>
                <label></label>
                <Field
                  name="profile.drivinglicense"
                  component="input"
                  type="checkbox"
                />
              </div>
            </div> */}
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </>
  );
}

export default InputForm;

// Personal Profile Data
// const [keywords, setKeyWords] = useState(""); // array

// Skills / Tools
// Programmeertalen | Technieken & Frameworks | Methodes & Tools | Overig
// - Naam
// - Score

// Work experiences

// - Periode
// - Titel
// - Tekst
// - Logo
// - Vaardigheden

// ## Opleiding
// - Periode
// - Instituut
// - Opleidingsnaam

// ## Certificaten
// - Periode
// - Instituut
// - Opleidingsnaam
// - Cijfer?

// ## Publicaties
// - Titel
// - Auteurs
// - Tekst

// ## Talen
// - taal: niveau

// ## Interesses
// - Vrije tekst

// ## Projects / Portfolio
// - Links to github etc.
