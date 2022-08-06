import * as yup from "yup";

export const signInYup = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("please check your email"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "minimum 8 characters long"),
});

export const signUpYup = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("please check your email"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "minimum 8 characters long"),
});
