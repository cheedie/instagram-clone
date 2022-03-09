import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ig from "../assets/topNavAssets/ig.svg";
import { signUpData } from "../data/signupData";
import Button from "../components/Button"

const Form = () => {
  return <Wrapper>
      <Logo src={ig} alt="instagram logo"/>
      <Button title = "Continue with facebook" />
      <FormWrapper>
        {signUpData.map((data)=>
            <InputWrapper>
                <Input name={data.name} type={data.type}/>
            </InputWrapper>
        )}
    </FormWrapper>
    <Button title = "Sign up" />

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