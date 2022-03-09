import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyledFormWrapper } from "../components/Styles/Form.Styled";
import { GlobalStyle } from "../components/Styles/Form.Styled";
import { StyledForm } from "../components/Styles/Form.Styled";
import { StyledButton } from "../components/Styles/Form.Styled";
import { StyledWrapper } from "../components/Styles/Form.Styled";
import { StyledText } from "../components/Styles/Form.Styled";
import { Container } from "../components/Styles/Form.Styled";
import { StyledDownload } from "../components/Styles/Form.Styled";
import login_logo from "../assets/Instagram-Wordmark.svg";
import { UserContext } from "../App";
import M from "materialize-css";

import img3 from "../assets/downloadios.svg";
import img2 from "../assets/downloadgoogle.svg";

const Login = () => {
  const {
    // state,

    dispatch,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const userLogin = () => {
    if (/\S+@\S+\.\S+/.test(email)) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("https://teamone-ig-clone.herokuapp.com/api/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({
            html: "signedin success",
            classes: "#43a047 green darken-1",
          });
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Container>
          <StyledFormWrapper>
            <img src={login_logo} alt="Instagram logo" />
            <StyledForm>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Phone number or Username or Email address"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPasword(event.target.value)}
              />
              <StyledButton value="Submit" onClick={() => userLogin()}>
                Login
              </StyledButton>
              <StyledText>
                Forgot your login details? Get help logging in.
              </StyledText>
              <h3>
                <span>OR</span>
              </h3>
              <StyledButton>Continue with Facebook</StyledButton>
              <StyledText>
                Dont have an account?
                <Link to="/signup">Sign up</Link>
              </StyledText>
            </StyledForm>
            <StyledDownload>
              <Link to="/">
                <img src={img3} alt="download app" />
              </Link>
              <Link to="/">
                <img src={img2} alt="download app" />
              </Link>
            </StyledDownload>
          </StyledFormWrapper>
        </Container>
      </StyledWrapper>
    </>
  );
};

export default Login;
