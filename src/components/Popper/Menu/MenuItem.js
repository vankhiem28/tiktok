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
    line-height: 1.8rem;
    padding: 11px 16px;
    &:hover {
      background-color: rgba(22, 24, 35, 0.03);
      cursor: pointer;
    }
  }
`;

function MenuItem({ data, onClick }) {
  return (
    <MenuItemStyles>
      <Button
        className="menu-item"
        leftIcon={data.icon}
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </MenuItemStyles>
  );
}

export default MenuItem;
