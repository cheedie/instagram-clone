import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    background-color: #fafafa;

`;

export const sharedStyles = css`
  background: #fafafa;
`;
export const StyledWrapper = styled.div`
  background-color: rgba(250, 250, 250, 0.49);
`;

export const Container = styled.div`
  max-height: 80%;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 7em;

  @media (max-width: 650px) {
    max-height: 80%;
    max-width: 95%;
    padding: 1em;
    margin: 0 1em;
  }
`;
export const StyledFormWrapper = styled.div`
  & > * {
    padding: 0.5em;
  }
  box-shadow: 0 0 20px rgb(46 59 71 / 10%);
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  padding: 1em 0;

  img {
    margin-top: 2em;
    align-self: center;
  }

  @media (max-width: 650px) {
    box-shadow: none;
  }
`;

export const StyledForm = styled.form`
  padding: 0.5em 4em;
  margin: 0.5em auto;
  h3 {
    padding: 0 3em;
    text-align: center;
    border-bottom: 1px solid #2e2a2a49;
    line-height: 0.1em;
    margin: 15px 0 15px;
    font-size: 15px;
  }
  h3 span {
    background: #fff;
    padding: 0 10px;
    // max-width: 750px;
  }

  input {
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin: 0 0 1.5em 0;
    border-radius: 4px;
    border: 1px solid #c4c4c4;
    width: 100%;
  }
  FaFacebook {
    background-color: #fff;
    margin: ;
  }
  @media (max-width: 650px) {
    padding: 1em;
  }
`;

export const StyledInput = styled.input`
  padding: 2em;
`;

export const StyledButton = styled.button`
  background-color: #1a83f3;
  color: #fff;
  textalign: center;
  width: 100%;
  padding: 1.2rem 3rem;
  margin: 1em 0;
  border: 1px solid #1a83f3;
  border-radius: 4px;
  &:nth-of-type(1) {
    background-color: #1a83f384;
    border: none;
  }
`;
export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin: 1em 0;
  color: rgba(60, 60, 67, 0.6);
  &:nth-of-type(1) {
    font-size: 12px;
    margin: 0.2em 0 2em 0;
  }
  &:nth-of-type(2) {
    margin: 4em 0 0 0;
  }
  span {
    color: black;
    font-weight: 800;
  }
  a {
    color: black;
    font-weight: 800;
    cursor: pointer;
  }
`;
export const StyledDownload = styled.div`
  display: flex;
  justify-content: center;
  img {
    align-self: center;
    margin: 1em 1em 1em 0;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
