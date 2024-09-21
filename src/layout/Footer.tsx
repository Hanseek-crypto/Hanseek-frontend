import colors from "@/styles/color";
import { styled } from "styled-components";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface ContainerProps {
  backgroundcolor: string;
}

export default function Footer() {
  const path = usePathname();

  const isMyPage = path === "/mypage";
  const backgroundcolor = isMyPage ? colors.white : colors.black;
  const router = useRouter();

  const homeImageSrc = isMyPage
    ? "/images/hs_foot_home_black.svg"
    : "/images/hs_foot_home_white.svg";

  const mypageImageSrc = isMyPage
    ? "/images/hs_foot_mypage_black.svg"
    : "/images/hs_foot_mypage_white.svg";

  return (
    <Container backgroundcolor={backgroundcolor}>
      <Link href="/home">
        <Image
          src={homeImageSrc}
          alt="home"
          width={36}
          height={36}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <Link href="/creator">
        <Image
          src="/images/hs_foot_plus.svg"
          alt="plus"
          width={56}
          height={56}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <Link href="/mypage">
        <Image
          src={mypageImageSrc}
          alt="my page"
          width={36}
          height={36}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 72px;
  padding: 8px 48px;

  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 100;

  background-color: ${(props) => props.backgroundcolor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
