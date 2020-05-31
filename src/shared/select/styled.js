import styled from "styled-components";

const Row = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.p`
  font-size: 14px;
  padding-right: 24px;
  margin-bottom: 4px;
  cursor: default;

  span {
    color: #e00029;
  }
`;

const Content = styled.div``;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 0.25rem;
  font-size: 0.8rem;
  width: 100%;
`;

export { Row, Label, Content, ErrorMessage };
