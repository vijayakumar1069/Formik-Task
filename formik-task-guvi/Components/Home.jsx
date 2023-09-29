import React, { useContext } from "react";
import { useFormik } from "formik";

import { Bookschema } from "./Schemas/Bookschema";
import { Authorschema } from "./Schemas/Authorschema";
import "./home.css";

import { Mycontext } from "./Contextcreation";

export default function Home() {
  const { setBooksDetails, setAuthor } = useContext(Mycontext);

  const formik = useFormik({
    initialValues: {
      Name: "",
      Author: "",
      ISBNNumber: "",
      date: "",
    },
    validationSchema: Bookschema,
    onSubmit: (values) => {
      setBooksDetails((prevBookDetails) => [...prevBookDetails, values]);
      formik.resetForm();
    },
  });

  // Move useFormik inside the Author component
  const formik1 = useFormik({
    initialValues: {
      AuthorName: "",
      Birth_Date: "",
      Biography: "",
    },
    validationSchema: Authorschema, // Assuming you have defined your validation schema (Author) elsewhere
    onSubmit: (values) => {
      setAuthor((prevauthor) => [...prevauthor, values]);
      formik1.resetForm();
    },
  });
  const formreset = (x) => {
    if (x == 1) {
      formik.resetForm();
    } else {
      formik1.resetForm();
    }
  };

  return (
    <>
      <div className="head">
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
              placeholder="Enter Publication date YYYY-MM-DD"
              name="date"
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="error-message">{formik.errors.date}</div>
            ) : null}

            <div className="button-container">
              <button type="submit" className="button-add">
                {" "}
                Add
              </button>
              <button
                type="submit"
                className="button-reset"
                onClick={() => formreset(1)}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="container">
          <form autoComplete="off" onSubmit={formik1.handleSubmit}>
            <label htmlFor="AuthorName"> AuthorName</label>
            <input
              type="text"
              value={formik1.values.AuthorName}
              onChange={formik1.handleChange}
              placeholder="Enter Author name"
              name="AuthorName"
            />
            {formik1.touched.AuthorName && formik1.errors.AuthorName ? (
              <div className="error-message">{formik1.errors.AuthorName}</div>
            ) : null}

            <label htmlFor="Birth_Date"> Birth_Date</label>
            <input
              type="text"
              value={formik1.values.Birth_Date}
              onChange={formik1.handleChange}
              placeholder="Enter Birth_Date Name YYYY-MM-DD"
              name="Birth_Date"
            />
            {formik1.touched.Birth_Date && formik1.errors.Birth_Date ? (
              <div className="error-message">{formik1.errors.Birth_Date}</div>
            ) : null}

            <label htmlFor="Biography"> Short Biography</label>
            <input
              type="text"
              value={formik1.values.Biography}
              onChange={formik1.handleChange}
              placeholder="Enter Short Biography"
              name="Biography"
            />
            {formik1.touched.Biography && formik1.errors.Biography ? (
              <div className="error-message">{formik1.errors.Biography}</div>
            ) : null}
            <div className="button-container">
              <button type="submit" className="button-add">
                {" "}
                Add
              </button>
              <button
                type="submit"
                className="button-reset"
                onClick={() => formreset(2)}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
