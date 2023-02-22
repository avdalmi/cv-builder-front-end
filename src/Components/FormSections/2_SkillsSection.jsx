import React from "react";
import { FormContainer, QuestionContainer } from "../../Styles/Form";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

function SkillsSection(formProps) {
  // const [skill, setSkill] = useState("");
  // const [level, setLevel] = useState(0);
  // // console.log("skilleleve", skill, level);
  // const array = [];

  // console.log("array", array);
  // const object = { skill, level };
  // // console.log("object", object);

  // const handleAddItem = () => {
  //   array.push(object);
  // };
  // console.log("skill mutator", props);
  // const { handleSubmit, mutators } = props;
  // const pope = mutators.pop;
  // const pushe = mutators.push;
  // console.log("pop", pop);
  // console.log("formprops", formProps);
  return (
    <>
      <div>
        <button type="button" onClick={() => formProps.fields.push("")}>
          Add skill
        </button>
        <button type="button" onClick={() => formProps.fields.pop("")}>
          Remove skill
        </button>
      </div>
      <FieldArray name="skills">
        {({ fields }) =>
          fields.map((name, index) => (
            <div key={name}>
              <label>Skill {index + 1}</label>
              <Field
                name={`${name}.skillName`}
                component="input"
                placeholder="name"
                type="text"
              />
              <Field
                name={`${name}.skillLevel`}
                component="input"
                placeholder="level"
                type="text"
              />
              <span
                onClick={() => fields.remove(index)}
                style={{ cursor: "pointer" }}
              >
                ❌
              </span>
            </div>
          ))
        }
      </FieldArray>
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
