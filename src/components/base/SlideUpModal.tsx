"use client";

import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { LongOrangeButton } from "./LongOrangeButton";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  buttonText: string;
  buttonOnClick: () => void;
  buttonActive?: boolean;
}

export default function SlideUpModal({
  isOpen,
  onClose,
  children,
  buttonText,
  buttonOnClick,
  buttonActive,
}: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton
          src="\images\hs_close.svg"
          alt="close"
          width={68}
          height={68}
          onClick={onClose}
        />
        {children}
        <LongOrangeButton
          active={buttonActive !== undefined ? buttonActive : true}
          onClick={() => buttonOnClick()}
        >
          {buttonText}
        </LongOrangeButton>
      </ModalContainer>
    </Overlay>,
    document.body
  );
}

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end; // Modal slides up from bottom
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 0 24px 24px 24px;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 768px;
  animation: ${slideUp} 0.3s ease-out;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

const CloseButton = styled(Image)`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 0px;
`;
