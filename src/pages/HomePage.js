import React from "react";
import BottomNavBar from "../components/BottomNavbar";
import TopNavBar from "../components/TopNavBar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import ProfilePic from "../assets/feed-profile-pic.png";
import {
  Line,
  LikeBtn,
  CommentBtn,
  ShareBtn,
  SaveBtn,
} from "../assets/topNavAssets";
import Post from "../assets/post.png";
const HomePage = () => {
  return (
    <>
      <TopNavBar />
      <Wrapper>
        <div className="home-page-container">
          {/* card */}
          <div className="display profile-container">
            <div className="display" style={{ gap: "1rem" }}>
              <img src={ProfilePic} alt="" className="profile-pic" />
              <span>
                <h6>john williams</h6>
                <p>canada</p>
              </span>
            </div>
            <span className="line">
              <Line />
            </span>
          </div>
          <img src={Post} alt="" />
          <div className="display" style={{ padding: "0.85rem 1rem" }}>
            <span className="btn-container">
              <button>
                <LikeBtn />
              </button>
              <button>
                <CommentBtn />
              </button>
              <button>
                <ShareBtn />
              </button>
            </span>
            <span>
              <button>
                <SaveBtn />
              </button>
            </span>
          </div>
          <span style={{ padding: "0 1rem" }}>1 Like</span>
          <div className="caption">
            <p>john williams</p>
            <p>interior deco by yours truly</p>
          </div>
          <div className="profile-bottom">
            <img src={ProfilePic} alt="" className="profile-pic" />
            <input
              type="text"
              placeholder="Add comment....."
              className="comment-input"
            />
          </div>
        </div>
        <div className="side-bar"></div>
      </Wrapper>
      <BottomNavBar />
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  background: #fff;
  flex-direction: column;

  .home-page-container {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .side-bar {
    display: none;
  }
  .display {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profile-container {
    padding: 0.85rem 1rem;
  }
  .line {
    cursor: pointer;
  }
  .btn-container {
    display: flex;
    gap: 0.85rem;
  }
  button {
    border: transparent;
    background: transparent;
    cursor: pointer;
  }
  .profile-bottom {
    display: flex;
    align-item: center;
    gap: 1rem;
    padding: 0.85rem 1rem;
  }
  .comment-input {
    border: none;
    cursor: text;
    outline: none;
    background: transparent;
  }
  .caption {
    display: flex;
    gap: 1rem;
    align-item: center;
    padding: 0 1rem;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    background: #e5e5e5;
    height: 1000px;
    .home-page-container {
      flex: 70vw;
      background: #e5e5e5;
      border: 1px solid blue;
    }
    .side-bar {
      display: block;
      flex: 30vw;
      border: 1px solid red;
    }
  }
`;

export default HomePage;
