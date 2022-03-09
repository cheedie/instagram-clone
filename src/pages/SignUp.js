import React from "react";
import styled from "styled-components";
import Form from "../components/Form";

const SignUp = () => {
  return (
    <Main>
      <Form />
    </Main>
  );
};

export default SignUp;

const Main = styled.main`
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height:100vh; */
  /* overflow:hidden; */
`;
