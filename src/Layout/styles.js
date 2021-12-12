import styled from "styled-components";

export const Overlay = styled.div`
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent;
  position: fixed;
`;

export const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  width: 100%;
  color: red;
  border-radius: 7%;
  .div1 {
  }
  .div2 {
    text-align: left;
    padding: 1rem;
    color: black;
    font-size: 18px;
  }
  .div3 {
    background-color: rgb(247, 248, 250);
    padding: 1rem;
    border-radius: 13%;
  }
  .div4 {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-weight: 400;
    padding: 0px 8px;
    border-radius: 6%;
    &:hover {
      border: 1px solid red;
    }
  }
  .span1 {
    color: black;
    font-size: 18px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
