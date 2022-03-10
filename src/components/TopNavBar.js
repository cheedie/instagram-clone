import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ig from "../assets/topNavAssets/ig.svg";
import { AiOutlineClose } from "react-icons/ai";
import Grid from "../assets/grid-icon.png";
import Live from "../assets/live.png";
import Reel from "../assets/reel.png";
import Story from "../assets/add-icon.png";

// import CreatePost from "../components/CreatePost";
import {
  HomeIcon,
  AddPostIcon,
  LikeIcon,
  MessageIcon,
  AntIcon,
  SearchIcon,
  Drag,
  Drop,
} from "../assets/topNavAssets";
// import { IconContext } from "react-icons/lib";

const TopNavBar = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  return (
    <Wrapper>
      <div className="section-center">
        <img src={ig} alt="instagram" />
        <ul className="mobile-links">
          <li onClick={(e) => setIsAddOpen(!isAddOpen)}>
            <AddPostIcon />
          </li>
          {isAddOpen && (
            <div onClick={() => setIsAddOpen(false)} className="modal-overlay">
              <div className="modal-content">
                <Link to="/createpost" className="modal-box">
                  <p>Post</p>
                  <img src={Grid} alt="" style={{ color: "red" }} />
                </Link>
                <div className="modal-box">
                  <p>Story</p>
                  <img src={Story} alt="" />
                </div>
                <div className="modal-box">
                  <p>Reel</p>
                  <img src={Reel} alt="" />
                </div>
                <div className="no-border">
                  <p>Live</p>
                  <img src={Live} alt="" />
                </div>
              </div>
            </div>
          )}
          <li
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Link to="/">
              <MessageIcon />
              <span>6</span>
            </Link>
          </li>
        </ul>
        <div className="search-input">
          <SearchIcon />
          <input type="text" placeholder="Search" name="search" />
        </div>
        <ul className="nav-links">
          <li>
            <HomeIcon />
          </li>
          <li>
            <Link to="/">
              <MessageIcon />
            </Link>
          </li>
          <li onClick={(e) => setCreatePost(true)}>
            <AddPostIcon />
          </li>
          <li>
            <Link to="/">
              <AntIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <LikeIcon />
            </Link>
          </li>
        </ul>
      </div>

      {createPost && (
        <div className="create-modal-overlay">
          {/* <div className="create-modal-mobile">
            <button className="close-btn" onClick={(e) => setCreatePost(false)}>
              <AiOutlineClose />
            </button>
            <h2>New post</h2>
            <button>Next</button>
          </div> */}

          <div className="create-modal-content">
            <button className="close-btn" onClick={(e) => setCreatePost(false)}>
              <AiOutlineClose />
            </button>
            <div className="post">
              <h1>Create new post</h1>
            </div>
            <div className="drag-drop">
              <div>
                <Drag />
                <Drop />
              </div>
              <h1 style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                Drag photos and videos here
              </h1>
              <button className="select-btn">Select image</button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #fff;
  border-bottom: none;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .section-center {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .section-center img {
    height: 2.5rem;
    object-fit: cover;
    cursor: pointer;
  }
  .search-input {
    display: none;
  }
  .nav-links {
    display: none;
  }
  .mobile-links {
    display: flex;
  }
  .mobile-links li {
    padding-left: 2rem;
    cursor: pointer;
  }
  span {
    height: 0.85rem;
    width: 0.85rem;
    background: #ed1717;
    color: #fff;
    font-size: 0.65rem;
    border-radius: 50%;
    position: absolute;
    top: -0.3rem;
    right: -0.3rem;
    display: grid;
    place-items: center;
  }
  .modal-overlay {
    position: absolute;
    top: 0;
    right: 1rem;
    left: auto;
    width: 8rem;
    padding-top: 3.5rem;
    z-index: 5;
  }
  .modal-content {
    background: #252424;
    border-radius: 10px;
  }
  .modal-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #515050;
    padding: 0.5rem 0.85rem;
    color: #fff;
  }
  .no-border {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 0.85rem;
    color: #fff;
  }
  .modal-box a {
    color: #fff;
  }
  .create-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-items: center;
  }
  .create-modal-content {
    display: none;
  }

  @media (min-width: 800px) {
    height: 5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    .section-center {
      width: 75vw;
    }
    .section-center img {
      height: 3rem;
    }

    .search-input {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      background-color: rgba(196, 196, 196, 0.2);
      border-radius: 10px;
      padding: 0.85rem 5rem;
      margin-left: 10rem;
    }
    .search-input svg {
      position: absolute;
      left: 1rem;
    }
    input {
      cursor: text;
      border: none;
      outline: none;
      background: transparent;
      font-size: 1.2rem;
      font-style: normal;
      letter-spacing: 0.5px;
      color: rgba(0, 0, 0, 0.75);
      // padding-left: 0.5rem;
    }
    .mobile-links {
      display: none;
    }
    .nav-links {
      display: flex;
    }
    .nav-links li {
      padding-right: 3rem;
      cursor: pointer;
    }

    .create-modal-content {
      display: block;
      background: #fff;
      border-radius: 20px;
      width: 40vw;
      height: 50rem;
      position: relative;
    }
    .close-btn {
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 3.5rem;
      font-weight: bold;
      color: white;
      position: absolute;
      right: -35rem;
      top: -7rem;
    }

    .post {
      height: 4rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .post h1 {
      color: #000000;
      font-weight: 800;
      font-size: 1.8rem;
    }
    .select-btn {
      background: #0395ff;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      border: none;
      padding: 0.85rem 1.5rem;
      font-size: 1.2rem;
      margin-top: 0.85rem;
    }
    .drag-drop {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 11rem;
    }
  }
`;

export default TopNavBar;
