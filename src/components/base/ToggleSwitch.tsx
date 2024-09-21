import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Body1Regular } from "@/styles/texts";
import colors from "@/styles/color";

interface ToggleSwitchProps {
  label: string;
  margin: string;
  option1: string;
  option2: string;
}

const ToggleSwitch = ({
  label,
  margin,
  option1,
  option2,
}: ToggleSwitchProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(option1);

  return (
    <Container $margin={margin}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/vb_sixpoint_star.svg"
          width={12}
          height={12}
          alt="sixpoint star"
          style={{ marginRight: "4px" }}
        />
        <Label>
          <Body1Regular>{label}</Body1Regular>
        </Label>
      </div>
      <Wrapper>
        <OptionButton
          active={selectedOption === option1}
          onClick={() => setSelectedOption(option1)}
        >
          {option1}
        </OptionButton>
        <Divider />
        <OptionButton
          active={selectedOption === option2}
          onClick={() => setSelectedOption(option2)}
        >
          {option2}
        </OptionButton>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div<{ $margin: string | undefined }>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.$margin};
`;

const Label = styled.label``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 720px;
  height: 64px;
  background-color: ${colors.grey1};
  padding: 8px;

  position: relative;

  margin-top: 8px;
`;

const Divider = styled.div`
  width: 1px;
  height: 48px;
  background-color: ${colors.grey3};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const OptionButton = styled.button<{ active?: boolean }>`
  width: 344px;
  height: 48px;
  background-color: ${(props) =>
    props.active ? "rgba(0, 122, 255, 0.08)" : "transparent"};
  border: ${(props) => (props.active ? `2px solid ${colors.primary}` : "none")};
  border-radius: 8px;
  color: ${(props) => (props.active ? `${colors.primary}` : `${colors.grey5}`)};

  font-size: 17px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  font-family: Pretendard;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ToggleSwitch;
