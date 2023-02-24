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
  //   workExperience: yup.array(
  //     yup.object({
  //       workPositionTitle: yup.string().required("please enter work job title"),
  //       workLocation: yup.string().required("please enter work location"),
  //       workCompanyName: yup.string().required("please enter company"),
  //       workPeriodStart: yup.date().required("please enter a start date"),
  //       workPeriodEnd: yup
  //         .date()
  //         .min(yup.ref("workPeriodStart"), "end date can't be before start date"),
  //       workDescription: yup.string().required("please enter a job description"),
  //     })
  //   ),
});
export const workValidationSchema = yup.object({
  workExperience: yup.array(
    yup.object({
      workPositionTitle: yup.string().required("please enter work job title"),
      workLocation: yup.string().required("please enter work location"),
      workCompanyName: yup.string().required("please enter company"),
      workPeriodStart: yup.date().required("please enter a start date"),
      workPeriodEnd: yup
        .date()
        .min(yup.ref("workPeriodStart"), "end date can't be before start date"),
      workDescription: yup.string().required("please enter a job description"),
    })
  ),
});
// workPeriodStart: "",
//         workPeriodEnd: "",
//         workCurrent: "false",
//         workPositionTitle: "",
//         workDescription: "",
//         workLocation: "",
//         workCompanyName: "",
// export const skillsValidationSchema = yup.object({

// })
export const addressValidationSchema = yup.object({
  address: yup.object().shape({
    street: yup.string().required("required"),
    country: yup.string().required("country req"),
  }),
});

// phone: yup
//   .string()
//   .matches(/^[6-9]\d{9}$/, {
//     message: "Please enter valid number.",
//     excludeEmptyString: false,
//   })
//   .required("please enter your phone number"),
