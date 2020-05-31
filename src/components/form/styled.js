import styled from "styled-components";

const Container = styled.div`
  padding: 30px 0px 60px 36px;
`;

const FormContainer = styled.form`
  width: 50%;
  min-width: 480px;
`;

const Button = styled.button`
  height: 48px;
  width: 200px;
  background-color: #4bc6d6;
  color: #fff;
  border-radius: 20px;
  margin: 0px auto;
  display: block;
  font-size: 16px;
  border-color: #4bc6d6;
  border-width: 1px;
  border-style: solid;

  :hover {
    cursor: pointer;
  }
`;

export { Container, Button, FormContainer };
