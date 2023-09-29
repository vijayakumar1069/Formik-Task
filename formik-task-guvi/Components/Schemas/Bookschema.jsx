import * as yup from "yup";

export const Bookschema = yup.object().shape({
  Name: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Name should only contain letters and spaces")
    .required("Name is required"),
  Author: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Author should only contain letters and spaces")
    .required("Author is required"),
  ISBNNumber: yup
    .string() // Change to string to allow ISBN as a string
    .matches(/^[0-9]+$/, "ISBN number should only contain numbers")
    .required("ISBN number is required"),
  date: yup
  .string() // Change the field type to string
  .matches(/^(?:\d{4}[-/]\d{2}[-/]\d{2})$/, "Date of Birth should be in the format yyyy/mm/dd or yyyy-mm-dd")
  .test("valid-dob", "Invalid Date of Birth", function (value) {
    if (!value) {
      return true; // This allows null or empty value, change to false if not allowed
    }

    // You can add additional date validation here if needed

    return true; // Returning true since the format is already validated
  })
  .required("Date of Birth is required"),
});
