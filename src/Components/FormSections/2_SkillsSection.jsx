import React from "react";
import { FieldArray, Field } from "formik";

function SkillsSection(props) {
  // console.log(initialValues);
  return (
    <FieldArray
      name="skills"
      render={(arrayHelpers) => {
        // console.log("helpers", arrayHelpers);
        return (
          <div>
            <h4>Add your relevant skills</h4>
            {props.initialValues.skills.map((skill, index) => (
              <div key={index} style={{ display: "flex", margin: "20px" }}>
                <Field
                  name={`skills[${index}].skillName`}
                  placeholder="skill"
                  style={{ margin: "10px" }}
                />
                <br />

                <Field
                  type="number"
                  max={5}
                  name={`skills[${index}].skillLevel`}
                  style={{ margin: "10px" }}
                />
                <button
                  type="button"
                  style={{ margin: "10px" }}
                  onClick={() => {
                    arrayHelpers.remove(index); //removes from the final value
                    props.initialValues.skills.splice(index, 1); //removes locally, UI only
                  }}
                >
                  remove skill
                </button>
              </div>
            ))}
            <button
              style={{ margin: "20px" }}
              type="button"
              onClick={() => {
                arrayHelpers.push({ skillName: "", skillLevel: 0 });
                props.initialValues.skills.push({
                  skillName: "",
                  skillLevel: 0,
                });
              }}
            >
              Add another skill
            </button>
          </div>
        );
      }}
    />
  );
}

export default SkillsSection;
// ## Vaardigheden
// ### Programmeertalen | Technieken & Frameworks | Methodes & Tools | Overig
// - Naam
// - Score
