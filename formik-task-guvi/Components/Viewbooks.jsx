import React, { useContext, useState } from "react";
import { Mycontext } from "./Contextcreation";
import "./viewbooks.css";

import { Link } from "react-router-dom";

export default function Viewbooks() {
  const {
    booksdetails,

    setUserIndex,

    setShoweditbook,
    handledelete,
  } = useContext(Mycontext);

  const handleindex = (index) => {
    setUserIndex(index);
    setShoweditbook(true);
  };

  return (
    <div className="viewbooks-container">
      <h2>Book Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>ISBN Number</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {booksdetails.map((book, index) => (
            <tr key={index}>
              <td>{book.Name}</td>
              <td>{book.Author}</td>
              <td>{book.ISBNNumber}</td>
              <td>{book.date}</td>
              <td>
                <div className="button-container-view">
                  <button
                    className="edit-button-view"
                    onClick={() => {
                      handleindex(index);
                    }}
                  >
                    <Link to="/editbook" className="Link">Edit</Link>
                  </button>
                  <button
                    className="delete-button-view"
                    onClick={() => {
                      handledelete(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
