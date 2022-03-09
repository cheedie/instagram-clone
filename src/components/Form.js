import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ig from "../assets/topNavAssets/ig.svg";
import { signUpData } from "../data/signupData";
import Button from "../components/Button";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setPhoneEmail] = useState(true);
  // const check = () => {
  //     if(!isEmail) {
  //         return "phone"
  //     }else if(phone.length > 0){
  //         setPhoneEmail(false);
  //         return "phone"
  //     }else{
  //         return "email"
  //     }

  // }
  const check = () => {
    if (!isEmail) {
      return "phone";
    } else if (phone.length > 0) {
      setPhoneEmail(false);
      return "phone";
    } else {
      return "email";
    }

    // !isEmail ? "phone" : phone.length > 0 ? setPhoneEmail(false) : "email";
  };
  const regex = /^\d/gi;
  return (
    <Wrapper>
      <Logo src={ig} alt="instagram logo" />
      <Button title="Continue with facebook" dark />
      <FormWrapper>
        <legend>
          <InputWrapper>
            <Label
              className={phone | email ? "active" : ""}
              htmlFor={check || "phone"}
            >
              Phone number or email address
            </Label>
            <Input
              name={check || "phone"}
              type="text"
              value={email}
              onChange={(e) =>
                regex.test(e)
                  ? setPhone(e.target.value)
                  : setEmail(e.target.value)
              }
            />
          </InputWrapper>

          <InputWrapper>
            <Label className={name ? "active" : ""} htmlFor="name">
              {" "}
              Fullname{" "}
            </Label>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label className={username ? "active" : ""} htmlFor="username">
              {" "}
              Username{" "}
            </Label>
            <Input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label className={password ? "active" : ""} htmlFor="password">
              {" "}
              Password{" "}
            </Label>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
        </legend>
      </FormWrapper>
      <Button title="Sign up" dark={password.length > 5 ? true : false} />
      <TextWrapper>
        <Text>
          By clicking on Sign up, you are agreeing to the <br />
          <Link to="/">Terms of Service</Link> and
          <Link to="/"> Privacy Policy</Link>
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text>
          Have an account?
          <Link to="/signin"> Sign in </Link>
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 375px;
  max-width: 375px;
  /* height: 100%;
  max-height: 812px; */
  background: #ffffff;
  display: grid;
  /* padding:10px; */
  grid-template-columns: 328px;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 50px;

  /* @media (max-width: 768px) {
    background: black;
  } */
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 328px;
  justify-content: center;
  align-items: center;

  & legend {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    gap: 30px;

    input:focus & label {
      transform: translateY(-100%) scale(0.75);
    }
  }
`;
const InputWrapper = styled.div`
  width: 328px;
  height: 50px;
  position: relative;
`;
const Label = styled.label`
  /* cursor: pointer; */
  position: absolute;
  display: block;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  color: #505050;
  transition: 0.2s;

  &.active {
    transform: translateY(-100%) scale(0.75);
  }
`;

const Input = styled.input`
  display: block;
  width: 328px;
  height: 50px;
  border: 0.5px solid #5b5b5b;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  padding: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #505050;
  background: transparent;

  &:focus {
    color: black;
    background: #eeeeee;
  }
`;
const Logo = styled.img`
  width: 220px;
  height: 74px;
  margin: 30px 0px;
`;

const TextWrapper = styled.div`
  width: 277px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  width: 277px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.078px;
  text-align: center;
  color: rgba(60, 60, 67, 0.6);

  a {
    color: black;
    font-weight: bold;
  }
`;
export default Form;
