import React from "react";
import { FormContainer, QuestionContainer } from "../../Styles/Form";
import { useState } from "react";
import { FieldArray, Field } from "formik";
import { FormStep } from "../Form/MultiStepForm";

function SkillsSection() {
  return (
    <>
      <FormStep stepName="Skills" onSubmit={() => console.log("skills submit")}>
        {({ values }) => (
          <FieldArray name="skills">
            {({ insert, remove, push }) => (
              <div>
                {values.skills.length > 0 &&
                  values.skills.map((skill, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`skills.${index}.name`}>Name</label>
                        <Field
                          name={`skills.${index}.name`}
                          placeholder="Jane Doe"
                          type="text"
                        />
                        {/* <ErrorMessage
                      name={`skills.${index}.name`}
                      component="div"
                      className="field-error"
                    /> */}
                      </div>
                      <div className="col">
                        <label htmlFor={`skills.${index}.level`}>level</label>
                        <Field
                          name={`skills.${index}.level`}
                          placeholder="jane@acme.com"
                          type="text"
                        />
                        {/* <ErrorMessage
                      name={`skills.${index}.name`}
                      component="div"
                    /> */}
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: "", level: "" })}
                >
                  Add Skill
                </button>
              </div>
            )}
          </FieldArray>
        )}
      </FormStep>
    </>
  );
}

export default SkillsSection;
// ## Vaardigheden
// ### Programmeertalen | Technieken & Frameworks | Methodes & Tools | Overig
// - Naam
// - Score

// {/* <div>
//               <h1>Skills</h1>
//               <div>
//                 <label></label>
//                 <Field
//                   name="profile.drivinglicense"
//                   component="input"
//                   type="checkbox"
//                 />
//               </div>
//             </div> */}

// {/* <h1>Skills</h1>
// {/* <form onSubmit={formProps.handleSubmit}>
//   {(formProps) => (
//     <>
//       <h1>Shifts</h1>
//       <button
//         onClick={() =>
//           formProps.form.mutators.push("shifts", {
//             startTime: "08:00",
//             endTime: "16:00",
//           })
//         }
//       >
//         Add shift
//       </button> */}
// <div> */}

{
  // /* <div>
  //       <button type="button" onClick={() => formProps.fields.push()}>
  //         Add skill
  //       </button>
  //       <button type="button" onClick={() => formProps.fields.pop()}>
  //         Remove skill
  //       </button>
  //     </div>
  //     <FieldArray name="skills">
  //       {({ fields }) =>
  //         fields.map((name, index) => (
  //           <div key={name}>
  //             <label>Skill {index + 1}</label>
  //             <Field
  //               name={`${name}.skillName`}
  //               component="input"
  //               placeholder="name"
  //               type="text"
  //             />
  //             <Field
  //               name={`${name}.skillLevel`}
  //               component="input"
  //               placeholder="level"
  //               type="number"
  //               max="5"
  //             />
  //             <span
  //               onClick={() => fields.remove(index)}
  //               style={{ cursor: "pointer" }}
  //             >
  //               ❌
  //             </span>
  //           </div>
  //         ))
  //       }
  //     </FieldArray>
  //     <button type="submit">submit</button> */
}
