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
      eduSchoolName: "",
      eduDegreeTitle: "",
      eduLocation: "",
      eduStartDate: "",
      eduEndDate: "",
      eduCurrent: "false",
      eduDescription: "",
    },
  ],
  licensesAndCertifications: [
    {
      certTitle: "",
      certInstituteName: "",
      certIssueDate: "",
      certExpirationDate: "",
      certCredentialID: "",
      certCredentialURL: "",
      certUpload: "",
    },
  ],
  publications: [
    {
      pubTitle: "", //Ex: To Kill a Mockingbird
      pubPublisher: "", //Ex: Harvard Business Review
      pubDate: "",
      pubURL: "",
      pubDescription: "",
    },
  ],
  languages: [
    {
      languageName: "",
      languageLevel: "",
    },
  ],
};

// - Periode
// - Instituut
// - Opleidingsnaam
// - Cijfer?
