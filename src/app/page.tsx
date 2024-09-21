"use client";

import Image from "next/image";
import styled from "styled-components";
import LoginButton from "@/components/common/LoginButton";
import { Body2Regular, Heading1, Heading2, Heading3 } from "@/styles/texts";
import { useRouter } from "next/navigation";
import colors from "@/styles/color";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import "./button.css";

export default function HomeBeforeLogin() {
  const router = useRouter();
  return (
    <Container>
      <Image
        src="/images/hs_beforelogin_logo.svg"
        alt={"logo"}
        width={315.66}
        height={95.22}
        style={{ margin: "0px 0px 107px 0" }}
      />
      <LoginButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  height: 100%;
  padding: 348px 24px 0 24px;
`;
