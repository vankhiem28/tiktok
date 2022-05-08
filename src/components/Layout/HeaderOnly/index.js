import React from "react";
import Header from "../components/Header";

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
