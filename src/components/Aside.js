import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { followerSuggestions } from "../data/followerSuggestions";
import { footerItems } from "../data/footerItems";
import john from "../assets/avatars/john.png";

const Aside = () => {
  return (
    <Wrapper>
      <UserWrapper>
        <ProfilePhotoWrapper>
          <ProfilePhoto src={john} alt="profile picture" />
        </ProfilePhotoWrapper>
        <TextContentWrapper>
          <Title>johnwilliams</Title>
          <Subtitle grow>John Williams</Subtitle>
        </TextContentWrapper>
      </UserWrapper>

      <SuggestionsWrapper>
        <TextContentWrapper row>
          <Title thin grow>
            Suggestions for you
          </Title>
          <Link black to="/">
            See All
          </Link>
        </TextContentWrapper>

        {followerSuggestions.map((user, index) => {
          return (
            <UserWrapper key={index} users>
              <ProfilePhotoWrapper users>
                <ProfilePhoto src={user.img} alt={user.username} />
              </ProfilePhotoWrapper>
              <TextContentWrapper users>
                <Title>{user.username}</Title>
                <Subtitle users>{user.subtitle}</Subtitle>
              </TextContentWrapper>

              <Link to="/">
                Follow
              </Link>
            </UserWrapper>
          );
        })}
      </SuggestionsWrapper>

      <FooterWrapper>
        {footerItems.map((item, index) => {
          return (
            <Link key={`${item.link}${index}`} to={item.to}>
              {item.link}
            </Link>
          );
        })}
      </FooterWrapper>
      <Copyright> &copy; 2022 instagram from meta</Copyright>
    </Wrapper>
  );
};

export default Aside;

const Wrapper = styled.aside`
  max-width: 370px;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  position: relative;
  padding: 0px 10px;
  box-sizing: content-box;
`;

const UserWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.users ? "48px" : "64px")};
  display: grid;
  grid-template-columns: ${(props) =>
    props.users ? "48px 70% auto" : "64px auto"};
  justify-content: flex-start;
  grid-gap: 10px;
  align-items: ${(props) => (props.suggestions ? "space-between" : "center")};

  a {
    font-weight: 600;
    font-size: 12px;
    color: #54b0f2;

    :hover {
      color: black;
      cursor: pointer;
    }
  }
`;

const ProfilePhotoWrapper = styled.div`
  width: ${(props) => (props.users ? "48px" : "64px")};
  height: ${(props) => (props.users ? "48px" : "64px")};
  border-radius: 50%;
  overflow: hidden;
`;
const ProfilePhoto = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
const SuggestionsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 370px;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

const TextContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.row ? "auto auto" : "1fr")};
  justify-content: space-between;
  height: 100%;
  align-items: flex-start;
  align-content: ${(props) => (props.users ? "space-around" : "flex-end")};
  a {
    font-weight: 500;
    color: #000000;

    :hover {
      font-weight: 600;
      color: black;
      cursor: pointer;
    }
  }
`;
const Title = styled.p`
  font-style: normal;
  line-height: 24px;
  color: #000000;
  font-size: ${(props) => (props.grow ? "16px" : "12px")};
  font-weight: ${(props) => (props.thin ? "500" : "600")};
  text-align: left;
`;

const Subtitle = styled.p`
  font-weight: normal;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.5);
  font-size: ${(props) => (props.grow ? "16px" : "12px")};
`;

const FooterWrapper = styled.div`
  max-width: 300px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.5);
    margin: 0px 5px;

    :hover {
      font-weight: 600;
      color: black;
    }
  }
`;

const Copyright = styled.p`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;
