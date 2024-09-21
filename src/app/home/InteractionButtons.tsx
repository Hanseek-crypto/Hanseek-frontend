import { Body1Regular } from "@/styles/texts";
import Image from "next/image";
import { useState } from "react";
import { styled } from "styled-components";
export default function InteractionButtons() {
  //   const [likes, setLikes] = useState(100);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  return (
    <Container>
      <div>
        {isLikeClicked ? (
          <Image
            src="/images/hs_home_like_active.svg"
            alt="like"
            width={40}
            height={40}
          />
        ) : (
          <Image
            src="/images/hs_home_like_inactive.svg"
            alt="like"
            width={40}
            height={40}
            onClick={() => {
              //   setLikes(likes + 1);
              setIsLikeClicked(true);
            }}
            style={{ cursor: "pointer" }}
          />
        )}

        <Body1Regular
          style={{ color: "white", marginTop: "4px", textAlign: "center" }}
        >
          {/* {likes} */}
          20K
        </Body1Regular>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Image
          src="/images/hs_home_comment.svg"
          alt="like"
          width={40}
          height={40}
        />
        <Body1Regular
          style={{ color: "white", marginTop: "4px", textAlign: "center" }}
        >
          55
        </Body1Regular>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Image
          src="/images/hs_home_share.svg"
          alt="like"
          width={40}
          height={40}
        />
        <Body1Regular
          style={{ color: "white", marginTop: "4px", textAlign: "center" }}
        >
          200K
        </Body1Regular>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 40%;
  right: 24px;
`;
