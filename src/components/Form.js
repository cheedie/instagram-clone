import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ig from "../assets/topNavAssets/ig.svg";
import { signUpData } from "../data/signupData";
import Button from "../components/Button"


const work = () =>{

}
const Form = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEmail, setPhoneEmail] = useState ("");
    // const check = (phoneOrEmail) => /^\d/gi.test(phoneOrEmail)
    const regex = /^\d/gi;
  return <Wrapper>
      <Logo src={ig} alt="instagram logo"/>
      <Button title = "Continue with facebook" />
      <FormWrapper>
          <legend>

            <InputWrapper>
            <Label htmlFor="phone"> Phone number or email address </Label>
                <Input name={"phone"} type="number" value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor="name"> Fullname </Label>
                <Input name="name" type="text" value={name}
                onChange={(e) => setName(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor="username"> Username </Label>
                <Input name="username" type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor="password"> Password </Label>
                <Input name="password" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </InputWrapper>

        </legend>
    </FormWrapper>
    <Button title = "Sign up" />
    <TextWrapper>
        <Text>By clicking on Sign up, 
            you are agreeing to the <br/>
            <Link to="/">Terms of Service</Link> and 
            <Link to="/"> Privacy Policy</Link>
        </Text>
    </TextWrapper>
    <TextWrapper>
        <Text>Have an account? 
            <Link to="/"> Sign in </Link> 
        </Text>
    </TextWrapper>

  </Wrapper>;
};

export default Form;

const Wrapper = styled.div`
    width:375px;
    min-width:375px;
    height:100%;
    max-height:812px;
    background:#ffffff;
    display:flex;
    flex-direction:column;
    align-items:center;
    // justify-content:center;
    position:relative;
`
const FormWrapper = styled.form`
    display:grid;
    grid-template-columns: 1fr;
    justify-content:center;
    align-items:center;
    gap:30px;
`
const InputWrapper = styled.div`
  width:328px;
  height: 50px;
`

const Label = styled.label`
cursor:pointer;
`

const Input = styled.input`
display:block;
width:328px;
height: 50px;
border: 0.5px solid #5B5B5B;
box-sizing: border-box;
border-radius: 3px;
position:relative;
`
const Logo = styled.img`
    width:220px;
    height:74px;
    margin:30px 0px;
`

const TextWrapper = styled.div`
width:277px;
display:flex;
justify-content:center;
align-items:center;

`

const Text = styled.p`
width:277px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
letter-spacing: -0.078px;
text-align:center;
color: rgba(60, 60, 67, 0.6);

    a{
        color:black;
        font-weight:bold;
    }
`