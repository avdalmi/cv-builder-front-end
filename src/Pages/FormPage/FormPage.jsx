import React, { useState } from "react";
import InputForm from "../../Components/Form/Form";
import ProfileSection from "../../Components/FormSections/ProfileSection";
import SkillsSection from "../../Components/FormSections/SkillsSection";
import { Form, Field } from "react-final-form";

function FormPage() {
  const [pgNum, setPgNum] = useState(1);

  const selectPage = ({ handleSubmit }) => {
    if (pgNum === 1) {
      return <ProfileSection handleSubmit={handleSubmit} />;
    } else if (pgNum === 2) {
      return <SkillsSection handleSubmit={handleSubmit} />;
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
        onSubmit={onSubmit}
        render={({ handleSubmit }) => selectPage({ handleSubmit })}
      />
      <p>Page {pgNum} / 3</p>
      <center>
        {pgNum > 1 && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              let pg = pgNum;
              setPgNum(pg - 1);
            }}
          >
            Back
          </button>
        )}
        {pgNum < 3 && (
          <button
            className="btn btn-primary mx-4"
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
    </div>
  );
}

export default FormPage;
