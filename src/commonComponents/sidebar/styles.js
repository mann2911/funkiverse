import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  z-index: 5;
  display: flex;
  flex-direction: column;
  background: black;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  padding-top:1rem;
  position: fixed;
  top: 0;
  right: 0;
  transform : ${props => (props.open ? `translateX(0)` : `translateX(100%)`)};
  transition: 0.3s linear;
  a {
    font-size: 16px;
    text-transform: uppercase;
    padding: 0.8rem 0 0 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 1050px) {
      font-size: 16px;
    }
    
    
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: 768px) {
    font-size: 16px;
  }

  &.active {
    color: yellow;
  }
`;

export const CloseContainer = styled.div`
  text-align: right;
  width: 100%;
`;

export const CloseBtn = styled(CloseOutline)`
  color: white;
  cursor: pointer;
`;

export const Action = styled.div`
  padding-top: 30px;
  div.social--link img {
    with: 20px;
    height: 20px;
    padding: 0 8px;
  }

  div.connect--btn {
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    transition: inherit;
    color: #000000;
    font-family: impact, impact-w01-2010, impact-w02-2010, impact-w10-2010,
      sans-serif;
    font-size: 16px;

    text-align: center;
    outline: none;
    text-decoration: none;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-size: 16px;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    background-color: rgb(253, 234, 241);
    border: 1px solid rgb(253, 234, 241);
    color: rgb(255, 0, 122);

    &:hover {
      a {
        text-decoration: none;
      }
    }
  }
`;

export const Overlay = styled.div`
  z-index: 2;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  display: ${({ open }) => (open ? "fixed" : "none")};
`;
