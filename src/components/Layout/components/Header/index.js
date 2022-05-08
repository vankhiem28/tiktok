import React from "react";

import styled from "styled-components";

const HeaderStyles = styled.header`
  height: 60px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  .content {
    height: 100%;
    width: 100%;
    max-width: 1150px;
    background-color: #ccc;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="content"></div>
    </HeaderStyles>
  );
};

export default Header;
