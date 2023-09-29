import React, { useState } from "react";
import { Mycontext } from "./Contextcreation";
import Editbook from "./Editbook";

export default function Contextuser({ children }) {
  const [booksdetails, setBooksDetails] = useState([]);
  const [author, setAuthor] = useState([]);
  const [userindex, setUserIndex] = useState(null);

  const [authorindex, setAuthorindex] = useState(null);

  const handleauthorindex = (index) => {
    setAuthorindex(index);
  };
  const handleauthordelete = (index) => {
    const updatedAuthor=[...author]
    updatedAuthor.splice(index,1)
    setAuthor(updatedAuthor)

  };

  const handledelete = (index1) => {
    const updatedbooks = [...booksdetails];
    updatedbooks.splice(index1, 1);
    setBooksDetails(updatedbooks);
  };

  return (
    <Mycontext.Provider
      value={{
        booksdetails,
        setBooksDetails,
        author,
        setAuthor,
        userindex,
        setUserIndex,
      
        handledelete,
        authorindex,
        setAuthorindex,
        handleauthorindex,
        handleauthordelete,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
}
