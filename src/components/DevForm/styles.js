import styled from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputBlock = styled.div`
  margin-bottom: 30px;


`;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 16px;
  color: #ccc;
  border: 0;
  border-bottom: 0.5px solid #ddd;
  background: #333;
  padding: 0 10px
`;

export const InputGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  .input-block {
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  color: #fff;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.5s;
  &:hover {
    background: #6931ca;
  }
`;
