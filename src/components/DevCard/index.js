import React from "react";

import { Item, Header,Avatar,UserInfo } from './styles';

const DevCard = ({ avatar_url, name, bio, techs, github_username}) => {
return (
  <Item key={github_username}>
    <Header>
      <Avatar src={avatar_url} alt={name} />
      <UserInfo>
        <strong>{name}</strong>
        <span>{techs.join(', ')}</span>
      </UserInfo>
    </Header>
    <p>{bio}</p>
    <a href={`https://www.github.com/${github_username}`}>Ir para perfil do GitHub</a>
  </Item>
);
}
  

export default DevCard;
