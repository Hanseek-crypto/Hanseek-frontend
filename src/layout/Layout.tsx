"use client";

import { ReactNode, useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "./Header";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // useEffect //
  useEffect(() => {
    setIsClient(true);
    // handleGoBack();
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      alert(
        "이 웹사이트는 모바일 및 태블릿에서의 이용을 지원하지 않습니다.\nPC로 접속해주세요!"
      ); // 모바일이나 태블릿 디바이스인 경우 경고창 표시
      router.push("/not-pc-error");
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <EarthContainer>
        {pathname !== "/" && pathname !== "/home" && <Header />}
        <BodyContainer controlheader={pathname}>{children}</BodyContainer>
        {pathname === "/home" && <Footer />}
      </EarthContainer>
    </>
  );
};

const EarthContainer = styled.div`
  width: 768px;
  height: 100%;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  background-color: white;
  box-shadow: -10px 0 15px -10px rgba(0, 0, 0, 0.2),
    10px 0 15px -10px rgba(0, 0, 0, 0.2);

  overflow: auto;
`;

const BodyContainer = styled.div<{ controlheader: string }>`
  width: 100%;
  height: 100%;
  padding-top: ${({ controlheader }) => controlheader === "/signup" && "65px"};
  padding-top: ${({ controlheader }) => controlheader === "/terms" && "65px"};
  padding-top: ${({ controlheader }) => controlheader === "/creator" && "65px"};
  padding-bottom: ${({ controlheader }) => controlheader === "/home" && "72px"};
`;

export default Layout;
