import React, { useState } from "react";
import ProfileSection from "../../Components/FormSections/1_ProfileSection";
import SkillsSection from "../../Components/FormSections/2_SkillsSection";
import { Form, Field } from "react-final-form";
import WorkExpSection from "../../Components/FormSections/3_WorkExpSection";
import EducationSection from "../../Components/FormSections/4_EducationSection";
import CertificatesSection from "../../Components/FormSections/5_CertificatesSection";
import PublicationSection from "../../Components/FormSections/6_PublicationSection";
import LanguageSection from "../../Components/FormSections/7_LanguageSection";
import HobbiesSection from "../../Components/FormSections/8_HobbiesSection";
import ProjectsSection from "../../Components/FormSections/9_ProjectsSection";
import arrayMutators from "final-form-arrays";

function FormPage() {
  const [pgNum, setPgNum] = useState(1);

  const selectPage = ({ handleSubmit }) => {
    // console.log("arrayMutatorsssss", mutators);
    if (pgNum === 1) {
      return <ProfileSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 2) {
      return <SkillsSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 3) {
      return <WorkExpSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 4) {
      return <EducationSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 5) {
      return <CertificatesSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 6) {
      return <PublicationSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 7) {
      return <LanguageSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 8) {
      return <HobbiesSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 9) {
      return <ProjectsSection handleSubmit={handleSubmit} />;
    }
  };

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
    <div>
      <Form
        mutators={{ ...arrayMutators }}
        initialValues={{ skills: [{}] }}
        onSubmit={onSubmit}
        // render={({ handleSubmit }) => selectPage()}
      >
        {selectPage}
      </Form>

      <center>
        {pgNum > 1 && (
          <button
            type="button"
            onClick={() => {
              let pg = pgNum;
              setPgNum(pg - 1);
            }}
          >
            Back
          </button>
        )}
        {pgNum < 9 && (
          <button
            type="button"
            onClick={() => {
              let pg = pgNum;
              setPgNum(pg + 1);
            }}
          >
            Next
          </button>
        )}
      </center>
      <p>Page {pgNum} / 9</p>
    </div>
  );
}

export default FormPage;
