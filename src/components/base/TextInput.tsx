import colors from "@/styles/color";
import { Body1Regular } from "@/styles/texts";
import Image from "next/image";
import styled from "styled-components";

interface TextInputProps {
  label: string;
  margin: string;
  [key: string]: string;
}

const TextInput = ({ label, margin, ...props }: TextInputProps) => (
  <Container $margin={margin}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/images/vb_sixpoint_star.svg"
        width={12}
        height={12}
        alt="sixpoint star"
        style={{ marginRight: "4px" }}
      />
      <Label htmlFor={label}>
        <Body1Regular>{label}</Body1Regular>
      </Label>
    </div>
    <TextInputField type="text" id={label} {...props} />
  </Container>
);

const Container = styled.div<{ $margin: string | undefined }>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.$margin};
`;

const Label = styled.label``;

const TextInputField = styled.input`
  width: 720px;
  height: 64px;
  background-color: ${colors.grey1};
  color: black;

  font-family: SFPro;
  font-weight: 400; //Regular
  font-size: 17px;
  padding-left: 16px;

  border: none;
  border-radius: 8px;

  margin-top: 8px;

  &:focus {
    outline: none;
    background-image: linear-gradient(
        to right,
        ${colors.primary},
        ${colors.primary}
      ),
      linear-gradient(to bottom, ${colors.grey1}, ${colors.grey1});
    background-size: 96% 2px, 96% 100%;
    background-position: bottom, top;
    background-repeat: no-repeat;
  }
`;

export default TextInput;
