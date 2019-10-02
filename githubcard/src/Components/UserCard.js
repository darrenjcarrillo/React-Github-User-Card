import React, { useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 25%;
  margin: 2rem;
  border: 1px solid #aaaaaa;
  padding: 1rem;
  border-radius: 10%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 10px 10px 5px black;
`;

const ImageSize = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

function UserCard(props) {
  return (
    <CardContainer>
      <div>
        <ImageSize src={props.user.avatar_url}></ImageSize>
        <p>User: {props.user.login}</p>
        {/* <p>{this.props.UserData.name}</p> */}
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
      </div>
    </CardContainer>
  );
}

export default UserCard;
