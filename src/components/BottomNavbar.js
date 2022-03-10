import React from "react";
import { IoMdHome, IoMdHeartEmpty } from "react-icons/io";
import { BiMoviePlay, BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import profileImg from "../assets/feed-profile-pic.png";

const BottomNavbar = () => {
  return (
    <>
      <StyledContainer>
        <ul className="bottomNav">
          <li className="nav-item">
            <Link to="/">
              <IoMdHome className="icon_bottom" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <BiSearch className="icon_bottom" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <BiMoviePlay className="icon_bottom" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <IoMdHeartEmpty className="icon_bottom" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile">
              <img src={profileImg} className="profile__img" alt="" />
            </Link>
          </li>
        </ul>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.section`
  background: #fff;
  border: #000;
  .bottomNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
  }
  .nav-item {
    position: sticky;
    bottom: 0;
    z-index: 100;
  }
  .nav-item img {
    object-fit: cover;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  li {
    font-size: 30px;
    text-decoration: none;
  }
  .icon_bottom {
    color: #1f1f1f;
  }
  @media (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

export default BottomNavbar;
