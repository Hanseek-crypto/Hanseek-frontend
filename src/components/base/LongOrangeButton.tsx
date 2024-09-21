import colors from "@/styles/color";
import { styled } from "styled-components";

export const LongOrangeButton = styled.button<{
  active?: boolean;
  fullHeight?: boolean;
}>`
  width: 100%;
  height: 64px;
  height: ${(props) => props.fullHeight && "100%"};

  background-color: ${(props) =>
    props.active ? `${colors.primary}` : `${colors.grey2}`};
  color: ${(props) => (props.active ? `${colors.white}` : `${colors.grey5}`)};

  font-weight: 600;
  font-size: 20px;
  font-family: SFPro;

  border: none;
  border-radius: 100px;
  cursor: pointer;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.active && `${colors.primaryHover}`};
  }

  &:active {
    background-color: ${(props) =>
      props.active &&
      `${colors.primaryActive}`}; /* 클릭 시 조금 더 어두운 색상 */
  }
`;
