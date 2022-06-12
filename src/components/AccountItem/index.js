import React from "react";
import { Link } from "react-router-dom";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Image from "../Image";

const AccountItemStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  &:hover {
    background-color: rgb(22, 24, 35, 0.03);
  }
  .link {
    display: flex;
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

function AccountItem({ data }) {
  console.log(data);
  return (
    <AccountItemStyles>
      <Link to={`/@${data.nickname}`} className="link">
        <Image src={data.avatar} alt="" className="avatar" />
        <div className="info">
          <h4 className="name">
            <span>{data.full_name}</span>
            {data.tick && (
              <FontAwesomeIcon icon={faCircleCheck} className="icon" />
            )}
          </h4>
          <span className="username">{data.nickname}</span>
        </div>
      </Link>
    </AccountItemStyles>
  );
}

export default AccountItem;
