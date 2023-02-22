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
    // phone: yup
    //   .string()
    //   .matches(/^[6-9]\d{9}$/, {
    //     message: "Please enter valid number.",
    //     excludeEmptyString: false,
    //   })
    //   .required("please enter your phone number"),
  }),
});
