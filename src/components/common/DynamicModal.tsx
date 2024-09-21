import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { styled } from "styled-components";
const { DynamicMethods } = require("./Methods.js");

export default function DynamicModal() {
  return (
    <Container>
      <DynamicWidget />
      <DynamicMethods />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
