// const displayCountryOptions = () => {
//   const countryNameArray = [];
//   countries.map((country) => countryNameArray.push(country.name.common));
//   return countryNameArray.sort().map((countryName) => {
//     return (
//       <MenuItem key={countryName} value={countryName}>
//         {countryName}
//       </MenuItem>
//     );
//   });
// };
export const initialValues = {
  // email: "", - add
  fullName: "",
  profile: {
    jobTitle: "",
    currentCity: "",
    currentCountry: "",
    email: "brian@buildingitheroes.nl",
    file: "",
    // drivingLicense: "false",
    drivingLicense: {
      hasDrivingLicense: false,
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
