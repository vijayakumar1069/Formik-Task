import React from "react";
import Navbar from "../Components/Navbar";
import Contextuser from "../Components/Contextuser";

export default function App() {
  return (
    <>
      <Contextuser>
        <Navbar />
      </Contextuser>
    </>
  );
}
