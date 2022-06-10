import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  position: relative;
  height: 50px;
  margin-top: -8px;

  .back-btn {
    width: 50px;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
  }

  .header-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function Header({ title, onBack }) {
  return (
    <HeaderStyles className="header">
      <button className="back-btn" onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} className="back-icon" />
      </button>
      <h4 className="header-title">{title}</h4>
    </HeaderStyles>
  );
}

export default Header;
