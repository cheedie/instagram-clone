import React from "react";
import styled from "styled-components";
import logo from "../assets/ig-logo-png.png";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/signup">
          <Logo src={logo} alt="Instagram Logo" />
        </Link>
      </LogoWrapper>
    </Wrapper>
  );
};

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
  width: 82px;
  height: 82px;
`;

const Logo = styled.img`
  width: 100%;
`;

export default SplashScreen;
