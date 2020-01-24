import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    list-style: none;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 650px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const Aside = styled.aside`
  width: 300px;
  background: #333;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 30px 20px;
  strong {
    font-size: 25px;
    text-align: center;
    display: block;
    color: #ddd;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  margin-left: 30px;
  flex: 1;
  width: 100%;
  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;
