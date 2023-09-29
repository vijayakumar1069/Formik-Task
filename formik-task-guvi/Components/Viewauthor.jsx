import React, { useContext } from "react";
import { Mycontext } from "./Contextcreation";
import { Link } from "react-router-dom";
import "./viewauthor.css";

export default function Viewauthor() {
  const { author,handleauthorindex,handleauthordelete} = useContext(Mycontext);
  return (
    <>
      <div className="viewAuthor-container">
        <h2>Author Details</h2>
        <table>
          <thead>
            <tr>
              <th>Author Name</th>
              <th>Date Of Birth</th>
              <th>Biography</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {author.map((auth, index) => (
              <tr key={index}>
                <td>{auth.AuthorName}</td>
                <td>{auth.Birth_Date}</td>
                <td>{auth.Biography}</td>

                <td>
                  <div className="button-container-view-author">
                    <button
                      className="edit-button-view-author"
                      onClick={() => {
                        handleauthorindex(index);
                      }}
                    >
                      <Link to="/editauthor" className="Link">
                        Edit
                      </Link>
                    </button>
                    <button
                      className="delete-button-view-author"
                      onClick={() => {
                        handleauthordelete(index);
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
    </>
  );
}
