import React from "react";

import styled from "styled-components";
import Button from "~/components/Button";

const MenuItemStyles = styled.div`
  .menu-item {
    margin-left: 0;
    width: 100%;
    border-radius: 0;
    text-align: left;
    font-weight: 500;
    &:hover {
      background-color: rgba(22, 24, 35, 0.03);
    }
  }
`;

function MenuItem({ data }) {
  return (
    <MenuItemStyles>
      <Button className="menu-item" leftIcon={data.icon} to={data.to}>
        {data.title}
      </Button>
    </MenuItemStyles>
  );
}

export default MenuItem;
