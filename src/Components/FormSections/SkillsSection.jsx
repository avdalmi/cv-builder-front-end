import React from "react";

import { FormContainer, QuestionContainer } from "../../Styles/Form";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import FileField from "../FileField/FileField";
import { brainFirstOptions } from "../../Data/BrainFirstOptions";

function SkillsSection({ handleSubmit }) {
  return <form onSubmit={handleSubmit}></form>;
}

export default SkillsSection;
