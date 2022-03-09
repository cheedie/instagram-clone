import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledFormWrapper } from "../components/Styles/Form.Styled";
import { GlobalStyle } from "../components/Styles/Form.Styled";
import { StyledForm } from "../components/Styles/Form.Styled";
import { StyledButton } from "../components/Styles/Form.Styled";
import { StyledWrapper } from "../components/Styles/Form.Styled"
import { StyledText } from "../components/Styles/Form.Styled";
import { Container } from "../components/Styles/Form.Styled";
import { StyledDownload } from "../components/Styles/Form.Styled";
import login_logo from "../assets/Instagram-Wordmark.svg";
import img3 from "../assets/downloadios.svg";
import img2 from "../assets/downloadgoogle.svg";

const Login = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <> 
        <GlobalStyle />
        <StyledWrapper>
          <Container>
            <StyledFormWrapper>
              <img src={login_logo} alt="Instagram logo" />
              <StyledForm onSubmit={handleSubmit}>
                <input 
                  type="email or number" 
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Phone number or Username or Email address" />
                <input type="password" placeholder="Password" />
                <StyledButton value="Submit" >Login</StyledButton>
                <StyledText>Forgot your login details? Get help logging in.</StyledText>
                <h3><span>Or</span></h3>
                <StyledButton>Continue with Facebook</StyledButton>
                <StyledText>Dont have an account? 
                  <Link to="/signup" >
                    <span> Sign up.</span>
                  </Link> 
                </StyledText>
              </StyledForm>
              <StyledDownload>
                <Link to='/'>
                    <img src={img3} alt="download app" />
                </Link>
                <Link to='/'>
                    <img src={img2} alt= "download app" />
                </Link>
              </StyledDownload>
            </StyledFormWrapper>
          </Container>
        </StyledWrapper>
      </>
  )
};

export default Login;