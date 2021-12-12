import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const ContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 22%;
  height: auto;
  border-radius: 5%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 999;

  @media (max-width: 800px) {
    width: 76%;
  }
`;

export const Modal = ({ handleClose, show, children }) => {
  return (
    <ModalDiv block={show ? "block" : "none"}>
      <ContentDiv>{children}</ContentDiv>
    </ModalDiv>
  );
};
