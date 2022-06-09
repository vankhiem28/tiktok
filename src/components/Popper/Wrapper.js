import React from "react";
import styled from "styled-components";

const WrapperStyles = styled.div`
  width: 100%;
  max-height: min((100vh - 96px) - 60px, 734px);
  border-radius: 8px;
  padding-top: 8px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
  overflow: hidden auto;
`;

function Wrapper({ children }) {
  return <WrapperStyles>{children}</WrapperStyles>;
}

export default Wrapper;
