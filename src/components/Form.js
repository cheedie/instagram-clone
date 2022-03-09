import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import styled from "styled-components";
import ig from "../assets/topNavAssets/ig.svg";
// import { signUpData } from "../data/signupData";
import { FacebookIcon } from "../assets/topNavAssets";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    uploadFields();
  }, []);
  const uploadFields = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("https://teamone-ig-clone.herokuapp.com/api/auth/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" });
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        <span className="hr-line">
          <span className="line"></span>
          <p>OR</p>
          <span className="line"></span>
        </span>

        <div>
          <form action="">
            <input
              type="text"
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
          </form>

          <button onClick={() => uploadFields()}>Sign up</button>
          <p>
            By clicking on Sign up, you are agreeing to the Terms of Service
            Privacy Policy
          </p>
        </div>
        <span>
          <Link to="/login"> Sign in </Link>
          Have an account?
        </span>
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
    margin: 5rem auto;
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

  @media (min-width: 800px) {
    height: 1000px;
    width: 30vw;
    margin: 5rem auto 0 auto;
    border: 1.5px solid rgba(0, 0, 0, 0.3);
    padding: 0 1rem;
  }
`;

// const FormWrapper = styled.form`
//   display: grid;
//   grid-template-columns: 328px;
//   justify-content: center;
//   align-items: center;

//   & legend {
//     display: grid;
//     grid-template-columns: 1fr;
//     justify-content: center;
//     align-items: center;
//     gap: 30px;

//     input:focus & label {
//       transform: translateY(-100%) scale(0.75);
//     }
//   }
// `;
// const InputWrapper = styled.div`
//   width: 328px;
//   height: 50px;
//   position: relative;
// `;
// const Label = styled.label`
//   /* cursor: pointer; */
//   position: absolute;
//   display: block;
//   top: 50%;
//   left: 8px;
//   transform: translateY(-50%);
//   color: #505050;
//   transition: 0.2s;

//   &.active {
//     transform: translateY(-100%) scale(0.75);
//   }
// `;

// const Input = styled.input`
//   display: block;
//   width: 328px;
//   height: 50px;
//   border: 0.5px solid #5b5b5b;
//   box-sizing: border-box;
//   border-radius: 3px;
//   position: relative;
//   padding: 8px;
//   font-family: Poppins;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   line-height: 24px;
//   color: #505050;
//   background: transparent;

//   &:focus {
//     color: black;
//     background: #eeeeee;
//   }
// `;

// const TextWrapper = styled.div`
//   width: 277px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Text = styled.p`
//   width: 277px;
//   font-family: Poppins;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 12px;
//   line-height: 18px;
//   letter-spacing: -0.078px;
//   text-align: center;
//   color: rgba(60, 60, 67, 0.6);

//   a {
//     color: black;
//     font-weight: bold;
//   }
// `;
export default Form;
