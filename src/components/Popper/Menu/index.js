import React from "react";
import Tippy from "@tippyjs/react/headless";
import styled from "styled-components";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const MenuStyles = styled.div`
  .menu-list {
    width: 224px;
  }
  .menu-popper {
    padding-bottom: 8px;
  }
`;

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <MenuStyles>
      <Tippy
        // visible
        interactive
        delay={[0, 500]}
        placement="bottom-end"
        render={(attrs) => (
          <div className="menu-list">
            <PopperWrapper className="menu-popper">
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </MenuStyles>
  );
}

export default Menu;
