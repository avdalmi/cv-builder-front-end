import * as yup from "yup";

export const profileValidationSchema = yup.object({
  fullName: yup.string().required("please enter your full name"),
  profile: yup.object().shape({
    jobTitle: yup.string().required("please enter your job title"),
    currentLocation: yup
      .string()
      .required("please enter your current location"),
    email: yup
      .string()
      .email("please enter a valid email")
      .required("please enter your email"),
    introductionText: yup
      .string()
      .required("please write a little bit about yourself"),
  }),
});

export const skillsValidationSchema = yup.object({
  skills: yup.array(
    yup.object({
      skillName: yup.string().required("please enter a skill name"),
    })
  ),
});

export const workValidationSchema = yup.object({
  workExperience: yup.array(
    yup.object({
      workPositionTitle: yup.string().required("please enter your job title"),
      workLocation: yup.string().required("please enter the location"),
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
      educationSchoolName: yup.string().required("please enter school name"),
      educationDegreeTitle: yup
        .string()
        .required("please enter the name of the degree"),
      educationLocation: yup
        .string()
        .required("please enter location of the college/university"),
      educationStartDate: yup.date().required("please enter a start date"),
      educationEndDate: yup
        .date()
        .min(
          yup.ref("educationStartDate"),
          "end date can't be before start date"
        )
        .required("please enter a end date or a expected end date"),
      educationDescription: yup
        .string()
        .required("please enter a description of the degree"),
    })
  ),
});

// {
//     certificateTitle: "",
//     certificateInstituteName: "",
//     certificateIssueDate: "",
//     certificateExpirationDate: "",
//     certificateCredentialID: "",
//     certificateCredentialURL: "",
//     certificateUpload: "",
//   },

export const certificatesValidationSchema = yup.object({
  licensesAndCertifications: yup.array(
    yup.object({
      certificateTitle: yup
        .string()
        .required("please enter the title of your certificate"),
      certificateInstituteName: yup
        .string()
        .required("please enter the name of the institute"),
      certificateIssueDate: yup.date().required("please enter a issue date"),
      certificateExpirationDate: yup
        .date()
        .min(
          yup.ref("certificateIssueDate"),
          "expiration date can't be before the issue date"
        ),
      certificateCredentialID: yup.string(),
      certificateCredentialURL: yup.string(),
      certificateUpload: yup.string(),
    })
  ),
});
// phone: yup
//   .string()
//   .matches(/^[6-9]\d{9}$/, {
//     message: "Please enter valid number.",
//     excludeEmptyString: false,
//   })
//   .required("please enter your phone number"),
