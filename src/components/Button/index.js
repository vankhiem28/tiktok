import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonStyles = styled.div`
  display: inline;
  + div {
    margin-left: 10px;
  }
  .wrapper {
    font-size: 1.6rem;
    min-width: 100px;
    padding: 9px 16px;
    border-radius: 4px;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    background-color: var(--white);
    border: 1px solid transparent;
    user-select: none;

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  ${(props) =>
    props.primary &&
    css`
      .wrapper {
        background-color: ${(props) => props.theme.primary};
        color: var(--white);
        &:hover {
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.06),
              rgba(0, 0, 0, 0.06)
            ),
            #fe2c55;
          cursor: pointer;
        }
      }
    `};
  ${(props) =>
    props.outline &&
    css`
      .wrapper {
        color: ${(props) => props.theme.primary};
        border-color: currentColor;
        &:hover {
          cursor: pointer;
          background-color: rgba(254, 44, 85, 0.06);
        }
      }
    `};
  ${(props) =>
    props.small &&
    css`
      .wrapper {
        min-width: 88px;
        padding: 4px 16px;
      }
    `};
  ${(props) =>
    props.large &&
    css`
      .wrapper {
        padding: 14px 16px;
      }
    `};
  ${(props) =>
    props.text &&
    css`
      .wrapper {
        border: none;
        :hover {
          text-decoration: underline;
        }
      }
    `};
`;

function Button({
  to,
  href,
  onClick,
  primary,
  outline = false,
  text = false,
  small = false,
  large = false,
  disabled = false,
  children,
  ...passProps
}) {
  let Comp = "button";

  console.log(outline);

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <ButtonStyles
      primary={primary}
      outline={outline}
      small={small}
      large={large}
      text={text}
    >
      <Comp className="wrapper" {...props} disabled={disabled}>
        <span>{children}</span>
      </Comp>
    </ButtonStyles>
  );
}

export default Button;
