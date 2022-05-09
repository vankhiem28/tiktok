import React from "react";

import styled from "styled-components";

const SideBarStyles = styled.aside`
  width: 356px;
`;

const SideBar = () => {
  return (
    <SideBarStyles>
      <h1>SideBar</h1>
    </SideBarStyles>
  );
};

export default SideBar;
