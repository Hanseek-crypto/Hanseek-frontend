import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProfileImageState } from "@/redux/slice/authSlice";
import { Heading3 } from "@/styles/texts";
import { isAbsolute } from "path";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const profileImage = useSelector(getProfileImageState);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  return (
    <>
      {pathname === "/signup" && <Header_Title title="Sign up" />}
      {pathname === "/terms" && <Header_Title title="Terms and use" />}
      {pathname === "/creator" && <Header_Title title="Upload" />}
    </>
  );
};

export default Header;

function Header_Title({ title }: { title: string }) {
  return (
    <Container_Header_Title>
      <Goback
        src="/images/hs_goback.svg"
        alt="go back"
        width={24}
        height={24}
        isAbsolute={true}
      />
      <Heading3>{title}</Heading3>
    </Container_Header_Title>
  );
}

function Header_Title_Next({ title }: { title: string }) {
  return (
    <Container_Header_Title_Next>
      <Goback
        src="/images/hs_goback.svg"
        alt="go back"
        width={24}
        height={24}
        isAbsolute={false}
      />
      <Heading3>{title}</Heading3>
      <div
        style={{
          fontFamily: "SFPro",
          fontSize: "16px",
          fontWeight: "400",
          cursor: "pointer",
        }}
      >
        Next
      </div>
    </Container_Header_Title_Next>
  );
}

const Container_Header_Title = styled.div`
  width: 100%;
  height: 65px;

  position: fixed;
  z-index: 10;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

const Container_Header_Title_Next = styled.div`
  width: 100%;
  height: 65px;

  position: fixed;
  z-index: 10;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
`;

const Container_Conversation = styled.div`
  width: 100%;
  height: 65px;

  position: fixed;
  z-index: 10;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

const Goback = styled(Image)<{ isAbsolute?: boolean }>`
  cursor: pointer;
  position: ${(props) => props.isAbsolute == true && "absolute"};
  left: 26px;
  top: 21px;
`;

const Container_Home = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px 0 24px;
`;
