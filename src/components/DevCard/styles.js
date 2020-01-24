import styled from "styled-components";


export const Item = styled.li`
  background: #313131;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 20px;
  @media (max-width: 650px) {
    main ul {
      grid-template-columns: 1fr;
    }
  }
  
  p {
    color: #999;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }
  a {
    color: #bf8fff;
    font-size: 14px;
    text-decoration: none;
    &:hover {
      color: #5a2ea6;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
width: 54px;
    height: 54px;
    border-radius: 50%;
`
export const UserInfo = styled.div`
  margin-left: 10px;
  strong {
    display: block;
    font-size: 16px;
    color: #ddd;
  }
  span {
    font-size: 13px;
    color: #bbb;
    margin-top: 2px;
  }
`;
