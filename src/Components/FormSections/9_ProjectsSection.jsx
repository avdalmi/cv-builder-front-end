import React from "react";

function ProjectsSection({ handleSubmit }) {
  return (
    <>
      <h1>Projects</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ProjectsSection;
// - Links to github etc.
// description
// title
