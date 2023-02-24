import React from "react";
import { FieldArray, Field } from "formik";
import { FormStep } from "../Form/MultiStepForm";
// import TextInputField from "../Form/InputField";
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
                  name={`skills[${index}].name`}
                  placeholder="skill"
                  style={{ margin: "10px" }}
                />
                <br />

                <Field
                  type="number"
                  max={5}
                  name={`skills[${index}].level`}
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
                arrayHelpers.push({ name: "", level: 0 });
                props.initialValues.skills.push({ name: "", level: 0 });
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

// {/* <FormStep stepName="Skills" onSubmit={() => console.log("step2 submit")}>
//       <FieldArray
//         name="skills"
//         render={(arrayHelpers) => {
//           // console.log("helpers", arrayHelpers);
//           return (
//             <div>
//               {props.initialValues.skills.map((skill, index) => (
//                 <div key={index}>
//                   <Field name={`skills[${index}].name`} placeholder="skill" />
//                   <br />
//                   <Field name={`skills[${index}].level`} />
//                   <button
//                     type="button"
//                     onClick={() => {
//                       arrayHelpers.remove(index); //removes from the final value
//                       props.initialValues.skills.splice(index, 1); //removes locally, UI only
//                     }}
//                   >
//                     -
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => {
//                   arrayHelpers.push({ name: "", level: 0 });
//                   props.initialValues.skills.push({ name: "", level: 0 });
//                 }}
//               >
//                 +
//               </button>
//             </div>
//           );
//         }}
//       />
//     </FormStep> */}
