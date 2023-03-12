import * as yup from "yup";

export const profileValidationSchema = yup.object({
  fullName: yup.string().required("please enter your full name"),
  profile: yup.object().shape({
    jobTitle: yup.string().required("please enter your job title"),
    currentCity: yup.string().required("please enter your current city"),
    currentCountry: yup.string().required("please select your current country"),
    linkedInLink: yup.string().required("please enter your LinkedIn link"),
    githubLink: yup.string().required("please enter your GitHub link"),
    portfolioLink: yup.string(),
    drivingLicense: yup.object({
      hasDrivingLicense: yup.string().required("hello"),
      drivingLicenseType: yup.string(),
    }),
    brainsFirst: yup.object({
      resultOne: yup.string(),
      resultTwo: yup.string(),
      resultThree: yup.string(),
    }),
    introductionText: yup
      .string()
      .required("please write a little bit about yourself")
      .max(500, "Must be under 500 characters"),
  }),
});

export const skillsValidationSchema = yup.object({
  skills: yup.array(
    yup.object({
      skillName: yup.string().required("please enter a skill name"),
      skillLevel: yup.number().min(0.5).required("please select skill level"),
    })
  ),
});

export const workValidationSchema = yup.object({
  workExperience: yup.array(
    yup.object({
      workPositionTitle: yup.string().required("please enter your job title"),
      workCity: yup.string().required("please enter the city"),
      workCountry: yup.string().required("please enter the country"),
      workCompanyName: yup.string().required("please enter company name"),
      workStartDate: yup.date().required("please enter a start date"),
      workEndDate: yup
        .date()
        .min(yup.ref("workStartDate"), "end date can't be before start date"),
      workDescription: yup.string().required("please enter a job description"),
    })
  ),
});

export const educationValidationSchema = yup.object({
  education: yup.array(
    yup.object({
      eduSchoolName: yup.string().required("please enter school name"),
      eduDegreeTitle: yup
        .string()
        .required("please enter the name of the degree"),
      eduCity: yup
        .string()
        .required("please enter city of the college/university"),
      eduCountry: yup
        .string()
        .required("please enter the country of the college/university"),
      eduStartDate: yup.date().required("please enter a start date"),
      eduEndDate: yup
        .date()
        .min(yup.ref("eduStartDate"), "end date can't be before start date")
        .required("please enter a end date or a expected end date"),
      eduFile: yup.string(),
      eduDescription: yup
        .string()
        .required("please enter a description of the degree"),
    })
  ),
});

export const certificatesValidationSchema = yup.object({
  licensesAndCertifications: yup.array(
    yup.object({
      certTitle: yup
        .string(),
      certInstituteName: yup
        .string(),
      certIssueDate: yup.date(),
      certExpirationDate: yup
        .date()
        .min(
          yup.ref("certIssueDate"),
          "expiration date can't be before the issue date"
        ),
      certCredentialID: yup.string(),
      certCredentialURL: yup.string(),
      certUpload: yup.string(),
    })
  ),
});

export const publicationsValidationSchema = yup.object({
  publications: yup.array(
    yup.object({
      pubTitle: yup.string(),
      pubPublisher: yup.string(),
      pubDate: yup.date(),
      pubURL: yup.string(),
      pubDescription: yup.string(),
    })
  ),
});

export const languagesValidationSchema = yup.object({
  languages: yup.array(
    yup.object({
      languageName: yup.string().required("please enter a language"),
      languageLevel: yup
        .string()
        .required("please enter you level of proficiency"),
    })
  ),
});

export const hobbiesValidationSchema = yup.object({
  hobbies: yup.array().of(yup.string()),
});

export const projectsValidationSchema = yup.object({
  projects: yup.array(
    yup.object({
      projectTitle: yup.string().required("please enter project title"),
      projectDescription: yup
        .string()
        .required("please enter a project description"),
      projectCity: yup.string().required("please enter the city"),
      projectCountry: yup.string().required("please enter the country"),
      projectDate: yup.string().required("please enter the project date"),
      projectLinks: yup
        .array()
        .of(yup.string().required("please enter the project link")),
      projectSkills: yup
        .array()
        .min(1, "not long eough")
        .of(
          yup
            .array(yup.string())
            .required("please select the skills used in this project")
        ),
    })
  ),
});
