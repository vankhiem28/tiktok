import React from "react";
import Header from "../components/Header";

import SideBar from "./SideBar";

import styled from "styled-components";

const DefaultLayoutStyles = styled.div`
  display: flex;
  justify-content: center;
  .container {
    width: 1150px;
    display: flex;
    padding: 0 24px;
  }
  .content {
    flex: 1;
  }
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <DefaultLayoutStyles>
        <div className="container">
          <SideBar></SideBar>
          <div className="content">{children}</div>
        </div>
      </DefaultLayoutStyles>
    </>
  );
};

export default DefaultLayout;
