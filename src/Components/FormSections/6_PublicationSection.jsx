import React from "react";

function PublicationSection({ handleSubmit }) {
  return (
    <>
      <h1>Publications</h1>
      <form onSubmit={handleSubmit}></form>
    </>
  );
}

export default PublicationSection;
// - Titel
// - Auteurs
// - Tekst
