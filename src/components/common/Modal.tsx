"use client";

import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from "next/image";
import { Body2Regular } from "@/styles/texts";
import { LongOrangeButton } from "../base/LongOrangeButton";
import colors from "@/styles/color";

interface ModalProps {
  title?: string;
  noHeader?: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  description: string;
  buttonText: string;
  buttonOnClick: () => void;
}

export default function Modal({
  isOpen,
  title,
  noHeader,
  onClose,
  children,
  className,
  description,
  buttonText,
  extra,
  buttonOnClick,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  const parts = description.split("/");

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer
        className={className}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          src="\images\hs_close.svg"
          alt="close"
          width={68}
          height={68}
          onClick={onClose}
        />

        {children}
        {!noHeader && <Title>{title}</Title>}
        {description.includes("/") ? (
          <Body2Regular
            style={{
              margin: "16px 0 32px 0",
              textAlign: "center",
              color: `${colors.grey6}`,
            }}
          >
            {parts[0]}
            <br />
            {parts[1]}
          </Body2Regular>
        ) : (
          <Body2Regular
            style={{
              margin: "16px 0 32px 0",
              textAlign: "center",
              color: `${colors.grey6}`,
            }}
          >
            {description}
          </Body2Regular>
        )}

        {extra}
        <LongOrangeButton onClick={() => buttonOnClick()} active={true}>
          {buttonText}
        </LongOrangeButton>
      </ModalContainer>
    </Overlay>,
    document.body
  );
}

const ModalContainer = styled.div<{ className?: string }>`
  position: relative;
  background-color: white;
  width: 560px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 72px 24px 49px 24px;
  ${({ className }) => className && `className: ${className};`}
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 50;
`;

const Title = styled.p`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;

  display: flex;
  width: 100%;
  justify-content: center;

  margin-bottom: -8px;
`;

const CloseButton = styled(Image)`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 0px;
`;
