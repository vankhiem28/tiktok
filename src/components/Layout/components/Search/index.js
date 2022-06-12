import React, { useRef, useState } from "react";
import HeadLessTippy from "@tippyjs/react/headless";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const SearchStyles = styled.div`
  .search {
    width: 361px;
    height: var(--search-height);
    padding: 0 0 0 16px;
    background-color: rgba(22, 24, 35, 0.06);
    border-radius: var(--search-border-radius);
    border: 1.5px solid transparent;
    display: flex;
    position: relative;
    input {
      color: ${(props) => props.theme.black};
      font-size: 1.6rem;
      border: none;
      background-color: transparent;
      outline: none;
      height: 100%;
      flex: 1;
      caret-color: ${(props) => props.theme.primary};
    }
    .search-clear {
      cursor: pointer;
    }
    .search-btn {
      width: 52px;
      height: 100%;
      border: none;
      outline: none;
      border-top-right-radius: var(--search-border-radius);
      border-bottom-right-radius: var(--search-border-radius);
      font-size: 1.8rem;
      color: rgba(22, 24, 35, 0.34);
      position: relative;
      &:hover {
        background-color: rgba(22, 24, 35, 0.03);
        cursor: pointer;
      }
      &:active {
        background-color: rgba(22, 24, 35, 0.06);
      }
      &::after {
        content: "";
        background-color: rgba(22, 24, 35, 0.12);
        position: absolute;
        width: 1px;
        top: var(--search-top-spacer);
        height: calc(var(--search-height) - var(--search-top-spacer) * 2);
        right: 52px;
      }
    }
    &:focus-within {
      border: 1.5px solid rgba(22, 24, 35, 0.2);
      transition: all 0.2s linear;
    }
    .clear,
    .loading {
      position: absolute;
      right: 70px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(22, 24, 35, 0.34);
    }
    .loading {
      animation: spinner 1s linear infinite;
    }

    @keyframes spinner {
      from {
        transform: translateY(-50%) rotate(0);
      }
      to {
        transform: translateY(-50%) rotate(360deg);
      }
    }
  }
  .search-results {
    width: 361px;
    .search-title {
      font-size: 1.4rem;
      margin: 0 16px;
      font-weight: 600;
      color: rgba(22, 24, 35, 0.5);
    }
  }
`;

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  // https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleClickOutSide = () => {
    setShowResults(false);
  };

  return (
    <SearchStyles>
      <HeadLessTippy
        visible={showResults && searchResult.length > 0}
        interactive
        render={(attrs) => (
          <div className="search-results">
            <PopperWrapper>
              <h4 className="search-title">Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result}></AccountItem>
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleClickOutSide}
      >
        <div className="search">
          <input
            value={searchValue}
            ref={inputRef}
            type="text"
            className="input"
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResults(true)}
          />
          {!!searchValue && !loading && (
            <button className="search-clear" onClick={handleClear}>
              <FontAwesomeIcon className="clear" icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className="loading" icon={faSpinner} />}

          <button className="search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadLessTippy>
    </SearchStyles>
  );
}

export default Search;
