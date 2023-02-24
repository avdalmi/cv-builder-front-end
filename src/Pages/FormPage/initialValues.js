export const initialValues = {
  fullName: "",
  profile: {
    jobTitle: "",
    currentLocation: "",
    email: "",
    file: "",
    drivingLicense: "false",
    brainFirst: {
      resultOne: "",
      resultTwo: "",
      resultThree: "",
    },
    introductionText: "",
  },
  skills: [
    {
      skillName: "",
      skillLevel: 0,
    },
  ],
  workExperience: [
    {
      workPositionTitle: "",
      workCompanyName: "",
      workLocation: "",
      workStartDate: "",
      workEndDate: "",
      workCurrent: "false",
      workDescription: "",
    },
  ],
  education: [
    {
      educationSchoolName: "",
      educationDegreeTitle: "",
      educationLocation: "",
      educationStartDate: "",
      educationEndDate: "",
      educationCurrent: "false",
      educationDescription: "",
    },
  ],
  licensesAndCertifications: [
    {
      certificateTitle: "",
      certificateInstituteName: "",
      certificateIssueDate: "",
      certificateExpirationDate: "",
      certificateCredentialID: "",
      certificateCredentialURL: "",
      certificateUpload: "",
    },
  ],
};

// - Periode
// - Instituut
// - Opleidingsnaam
// - Cijfer?
