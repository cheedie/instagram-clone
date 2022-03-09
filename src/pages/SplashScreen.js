import React from "react";
import styled from "styled-components";
import logo from "../assets/ig-logo-png.png";
//I think the Png logo looks better than the svg version

const SplashScreen = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Instagram Logo" />
      </LogoWrapper>
    </Wrapper>
  );
};

export default SplashScreen;

const Wrapper = styled.main`
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: block;
  width:82px;
  height:82px;
`;

const Logo = styled.img`
width:100%;
`;
