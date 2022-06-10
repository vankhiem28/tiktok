import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import styled from "styled-components";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";

const MenuStyles = styled.div`
  .menu-list {
    width: 224px;
  }
  .menu-popper {
    padding-bottom: 8px;
  }
`;

const defaultFunc = () => {};

function Menu({ children, items = [], onChange = defaultFunc }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <MenuStyles>
      <Tippy
        // visible
        offset={[14, 10]}
        interactive
        delay={[0, 500]}
        placement="bottom-end"
        render={(attrs) => (
          <div className="menu-list">
            <PopperWrapper className="menu-popper">
              {history.length > 1 && (
                <Header
                  title="Language"
                  onBack={() =>
                    setHistory((prev) => prev.slice(0, prev.length - 1))
                  }
                ></Header>
              )}
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
        onHide={() => setHistory((prev) => prev.slice(0, 1))}
      >
        {children}
      </Tippy>
    </MenuStyles>
  );
}

export default Menu;
