export const initialValues = {
  // email: "", - add
  fullName: "",
  profile: {
    jobTitle: "",
    currentCity: "",
    currentCountry: "",
    email: "brian@buildingitheroes.nl",
    file: "",
    drivingLicense: {
      hasDrivingLicense: "false",
      drivingLicenseType: "",
    },
    githubLink: "",
    linkedInLink: "",
    portfolioLink: "",
    brainsFirst: {
      resultOne: "",
      resultTwo: "",
      resultThree: "",
    },
    introductionText: "",
  },
  skills: [""],
  workExperience: [
    {
      workPositionTitle: "",
      workCompanyName: "",
      workCity: "",
      workCountry: "",
      workStartDate: "",
      workEndDate: "",
      workCurrent: "true",
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
      eduFile: "",
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
      pubTitle: "",
      pubPublisher: "",
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
  hobbies: [""],
  projects: [
    {
      projectTitle: "",
      projectDescription: "",
      projectCity: "",
      projectCountry: "",
      projectDate: "",
      projectLinks: [""],
      // output-> [[" ", " "]]
      projectSkills: [""],
    },
  ],
};
