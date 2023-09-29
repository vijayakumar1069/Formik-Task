import * as yup from "yup";

export const Authorschema = yup.object().shape({
  AuthorName: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "AuthorName should only contain letters and spaces"
    )
    .required("This field is required"),
  Birth_Date: yup
    .string() // Change the field type to string
    .matches(
      /^(?:\d{4}[-/]\d{2}[-/]\d{2})$/,
      "Date of Birth should be in the format yyyy/mm/dd or yyyy-mm-dd"
    )
    .test("valid-dob", "Invalid Date of Birth", function (value) {
      if (!value) {
        return true; // This allows null or empty value, change to false if not allowed
      }

      // You can add additional date validation here if needed

      return true; // Returning true since the format is already validated
    })
    .required("Date of Birth is required"),
  Biography: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "Biography should only contain letters and spaces"
    )
    .required("This field is required"),
});
