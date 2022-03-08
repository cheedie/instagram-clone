import React from "react";


const Login = () => {
  return (
    <> 
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm>
                <img src="assets/" alt="Instagram logo" />
                <input type="email or number" placeholder="Phone number or Email address" />
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <StyledButton>Sign up</StyledButton>
                <StyledText>Forgot your login details? Get help logging in.</StyledText>
                <h3><span>Or</span></h3>
                {/* <FaFacebookSquared /> */}
                <StyledButton>Continue with Facebook</StyledButton>
                <StyledText>Dont have an account?  Sign up.</StyledText>
            </StyledForm>
        </StyledFormWrapper>
    </>
  )
}


export default Login;
