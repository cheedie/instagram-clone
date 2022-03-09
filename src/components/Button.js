import styled from "styled-components";

const Button = (props) => {
  const { title } = props;
  return (
    <Wrapper>
      <Title>{title || "login"}</Title>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div`
  width: 328px;
  min-width: 328px;
  height: 50px;
  background: ${(props) => (props.dark ? "#1A83f3" : "#80baf8")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;


  /* *, 
  &{
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  } */

  :hover {
    cursor: pointer;
    transform:scale(1.005) translate(1px, 0px);
    filter:brightness(90%) saturate(120%);
  }
`;

const Title = styled.p`
  text-transform: capitalize;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
