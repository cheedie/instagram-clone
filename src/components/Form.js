import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import styled from "styled-components";
import { StyledForm } from "../components/Styles/Form.Styled";
import { StyledButton } from "../components/Styles/Form.Styled";
import { StyledText } from "../components/Styles/Form.Styled";

import ig from "../assets/topNavAssets/ig.svg";
// import { signUpData } from "../data/signupData";
import { FacebookIcon } from "../assets/topNavAssets";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const uploadFields = () => {
    if (/\S+@\S+\.\S+/.test(email)) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    try {
      fetch("https://teamone-ig-clone.herokuapp.com/api/auth/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      }).then((res) => navigate("/home"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div className="sign-up-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={ig} alt="instagram logo" className="logo" />
        </div>
        <button className="facebook">
          <span>
            <FacebookIcon />
          </span>
          <p>Continue with Facebook</p>
        </button>
        <h3 className="line">
          <span>OR</span>
        </h3>

        <div>
          <StyledForm>
            <input
              type="email"
              name="email"
              placeholder="Phone number or email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              name="name"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StyledForm>

          <StyledButton value="Submit" onClick={() => uploadFields()}>
            Sign up
          </StyledButton>

          <StyledText>
            By clicking on Sign up, you are agreeing to the <br />{" "}
            <span>Terms of Service </span>
            and <span>Privacy Policy </span>
          </StyledText>
        </div>

        <StyledText>
          Have an account?
          <Link to="/login">Sign in.</Link>
        </StyledText>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: #ffffff;
  border: none;

  .logo {
    width: 15rem;
  }
  .sign-up-container {
    width: 90vw;
    margin: 1.5rem auto 1rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
  .facebook {
    background: #1a83f3;
    border-radius: 3px;
    color: #fff;
    border: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 0;
    cursor: pointer;
  }
  .line {
padding: 0 3em;
    text-align: center;
    border-bottom: 1px solid #2e2a2a49;
    line-height: 0.1em;
    margin: 15px 0 15px;
    font-size: 15px;
  }
.line span {
    background: #fff;
    padding: 0 10px;
    // max-width: 750px;
  }

  }

  @media (min-width: 800px) {
    height: 1000px;
    width: 30vw;
    margin: 5rem auto 0 auto;
    border: 1.5px solid rgba(0, 0, 0, 0.3);
    padding: 0 1rem;
  }
`;

export default Form;
