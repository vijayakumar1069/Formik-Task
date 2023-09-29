import React, { useContext } from "react";
import { Mycontext } from "./Contextcreation";
import { Formik, useFormik } from "formik";
import { Bookschema } from "./Schemas/Bookschema";
import { useNavigate } from "react-router-dom";
import "./editbook.css";

export default function Editbook() {
  const { booksdetails, setBooksDetails, userindex } = useContext(Mycontext);
  const selectedbook = booksdetails[userindex];
  const navigate = useNavigate(); // Use useNavigate

  const formik = useFormik({
    initialValues: {
      Name: selectedbook.Name,
      Author: selectedbook.Author,
      ISBNNumber: selectedbook.ISBNNumber,
      date: selectedbook.date,
    },
    validationSchema: Bookschema,
    onSubmit: (values) => {
      // Update the book details at userindex
      const updatedBooks = [...booksdetails];
      updatedBooks[userindex] = { ...updatedBooks[userindex], ...values };
      setBooksDetails(updatedBooks);
      console.log(updatedBooks);

      // Navigate to the "viewbooks" page after successful submission
      navigate("/viewbooks");
    },
  });

  return (
    <>
      <div className="container">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <label htmlFor="Name"> Name</label>
          <input
            type="text"
            value={formik.values.Name}
            onChange={formik.handleChange}
            placeholder="Enter Book name"
            name="Name"
          />
          {formik.touched.Name && formik.errors.Name ? (
            <div className="error-message">{formik.errors.Name}</div>
          ) : null}

          <label htmlFor="Author"> Author</label>
          <input
            type="text"
            value={formik.values.Author}
            onChange={formik.handleChange}
            placeholder="Enter Author Name"
            name="Author"
          />
          {formik.touched.Author && formik.errors.Author ? (
            <div className="error-message">{formik.errors.Author}</div>
          ) : null}

          <label htmlFor="ISBNNumber"> ISBN Number</label>
          <input
            type="text"
            value={formik.values.ISBNNumber}
            onChange={formik.handleChange}
            placeholder="Enter ISBN Number"
            name="ISBNNumber"
          />
          {formik.touched.ISBNNumber && formik.errors.ISBNNumber ? (
            <div className="error-message">{formik.errors.ISBNNumber}</div>
          ) : null}

          <label htmlFor="date"> Publication Date</label>
          <input
            type="text"
            value={formik.values.date}
            onChange={formik.handleChange}
            placeholder="Enter Publication date YY-MM-DD"
            name="date"
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error-message">{formik.errors.date}</div>
          ) : null}

          <div className="button-container">
            <button type="submit" className="button-add">
              Add
            </button>
            <button
              type="button"
              className="button-reset"
              onClick={() => {
                formik.resetForm();
                navigate("/viewbooks"); // Navigate to "viewbooks" on Reset
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
