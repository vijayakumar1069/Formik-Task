import { useFormik } from "formik";
import React, { useContext } from "react";
import { Mycontext } from "./Contextcreation";
import { Authorschema } from "./Schemas/Authorschema";
import { useNavigate } from "react-router-dom";

export default function Editauthor() {
  const { author, authorindex, setAuthor } = useContext(Mycontext);
  const selectedAuthor = author[authorindex];
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      AuthorName: selectedAuthor.AuthorName,
      Birth_Date: selectedAuthor.Birth_Date,
      Biography: selectedAuthor.Biography,
    },
    validationSchema: Authorschema,
    onSubmit: (values) => {
      const updated = [...author];
      updated[authorindex] = { ...author[authorindex], ...values };
      setAuthor(updated);
      navigate("/viewauthor");
    },
  });
  return (
    <>
      <div className="container">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <label htmlFor="AuthorName"> AuthorName</label>
          <input
            type="text"
            value={formik.values.AuthorName}
            onChange={formik.handleChange}
            placeholder="Enter Author name"
            name="AuthorName"
          />
          {formik.touched.AuthorName && formik.errors.AuthorName ? (
            <div className="error-message">{formik.errors.AuthorName}</div>
          ) : null}

          <label htmlFor="Birth_Date"> Birth_Date</label>
          <input
            type="text"
            value={formik.values.Birth_Date}
            onChange={formik.handleChange}
            placeholder="Enter Birth_Date Name YY-MM-DD"
            name="Birth_Date"
          />
          {formik.touched.Birth_Date && formik.errors.Birth_Date ? (
            <div className="error-message">{formik.errors.Birth_Date}</div>
          ) : null}

          <label htmlFor="Biography"> Short Biography</label>
          <input
            type="text"
            value={formik.values.Biography}
            onChange={formik.handleChange}
            placeholder="Enter Short Biography"
            name="Biography"
          />
          {formik.touched.Biography && formik.errors.Biography ? (
            <div className="error-message">{formik.errors.Biography}</div>
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
                navigate("/viewauthor"); // Navigate to "viewbooks" on Reset
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
