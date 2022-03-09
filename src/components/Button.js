import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = (props) => {
    const {title, color} = props
  return <Wrapper>
        <Title>{title || "login"}</Title> 
        </Wrapper>;
};

export default Button;

const Wrapper = styled.div`
    width:328px;
    min-width:328px;
    height:50px;
    background:#1A83f3;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`

const Title = styled.p`
  text-transform:capitalize;
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
g
text-align: center;
color: #FFFFFF;
`