import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: block;
    flex: 30vw;
    border: 1px solid red;
    // position: fixed;
    // height: calc(100vh - 4rem);
    // z-index: 1;
    // top: 0;
    // left: 0;
    // overflow-x: hidden;
  }
`;
export default Sidebar;
