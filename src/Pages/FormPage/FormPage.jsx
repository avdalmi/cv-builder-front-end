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
import ButtonMultiple from "../../Components/FormSections/ButtonMultiple";
import { FieldArray } from "react-final-form-arrays";
import { MONGO_COLLECTION, MONGO_DATABASE } from "../../config/config";

function FormPage({ mongoContext: { client, user } }) {
  const [pgNum, setPgNum] = useState(1);

  const onSubmit = async (values) => {
    const collection = client.db(MONGO_DATABASE).collection(MONGO_COLLECTION);
    const reponse = await collection.insertOne(values);
    console.log(reponse);
  };

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

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators,
        }}
        initialValues={{
          skills: [{ name: "", level: "" }],
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop },
          },
          pristine,
          form,
          submitting,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Custom field</label>
              <Field name="animals" component={ButtonMultiple} />
            </div>

            <div>
              <Field name="profile" component={ProfileSection} />
            </div>

            <div>
              <FieldArray name="skills" component={SkillsSection} />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default FormPage;

// {
//   /* <Form
//         mutators={{ ...arrayMutators }}
//         initialValues={{ skills: [{}] }}
//         onSubmit={onSubmit}
//         // render={({ handleSubmit }) => selectPage()}
//       >
//         {selectPage}
//       </Form>

//       <center>
//         {pgNum > 1 && (
//           <button
//             type="button"
//             onClick={() => {
//               let pg = pgNum;
//               setPgNum(pg - 1);
//             }}
//           >
//             Back
//           </button>
//         )}
//         {pgNum < 9 && (
//           <button
//             type="button"
//             onClick={() => {
//               let pg = pgNum;
//               setPgNum(pg + 1);
//             }}
//           >
//             Next
//           </button>
//         )}
//       </center>
//       <p>Page {pgNum} / 9</p> */
// }
