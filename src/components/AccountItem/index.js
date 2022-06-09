import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const AccountItemStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  &:hover {
    background-color: rgb(22, 24, 35, 0.03);
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .info {
    flex: 1;
    margin-left: 12px;
  }
  .name {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .icon {
    font-size: 1.4rem;
    margin-left: 6px;
    color: rgb(32, 213, 236);
  }
  .username {
    font-size: 1.4rem;
    color: rgba(22, 24, 35, 0.5);
  }
`;

function AccountItem() {
  return (
    <AccountItemStyles>
      <img
        src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
        alt=""
        className="avatar"
      />
      <div className="info">
        <h4 className="name">
          <span>Nguyen van a</span>
          <FontAwesomeIcon icon={faCircleCheck} className="icon" />
        </h4>
        <span className="username">Nguyen van a</span>
      </div>
    </AccountItemStyles>
  );
}

export default AccountItem;
