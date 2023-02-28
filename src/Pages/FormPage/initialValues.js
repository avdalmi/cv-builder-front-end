export const initialValues = {
  fullName: "",
  profile: {
    jobTitle: "",
    currentCity: "",
    currentCountry: "",
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
      workCity: "",
      workCountry: "",
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
      eduCity: "",
      eduCountry: "",
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
  hobbies: [
    {
      hobby: "",
    },
  ],
  projects: [
    {
      projectTitle: "",
      projectDescription: "",
      projectCity: "",
      projectCountry: "",
      projectDate: "",
      projectLinks: [
        {
          projectLink: "",
        },
      ],
      projectSkills: [
        {
          projectSkill: "",
        },
      ],
    },
  ],
};
