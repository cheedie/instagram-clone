import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const CreatePost = () => {
  const [createPost, setCreatePost] = useState(false);
  return (
    <Wrapper>
      <div className="modal-content">
        <button className="close-btn" onClick={(e) => setCreatePost(false)}>
          <AiOutlineClose />
        </button>
        <div className="post">
          <p>Create new post</p>
        </div>
        <div>
          Drag photos and videos here
          <button className="select-btn">Select from computer</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  //   top: 0;
  //   right: 1rem;
  //   left: auto;
  width: 100%;
  height: 100vh;
  //   padding-top: 3.5rem;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  .modal-content {
    display: none;
  }
  @media (min-width: 800px) {
    .modal-content {
      display: block;
      background: #fff;
      border-radius: 10px;
      width: 30rem;
    }
    .post {
      height: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      text-align: center;
    }
    .select-btn {
      background: #0395ff;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      border: none;
      padding: 0.85rem 1rem;
    }
  }
`;

export default CreatePost;
