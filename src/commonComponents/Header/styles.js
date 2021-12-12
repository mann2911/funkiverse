import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 auto;
  width:90%;
  .menutriggerButton {
    padding:15px;
    display: block;
    margin-left:auto;
    @media (min-width: 1180px){
      display:none;
    }
  }
  .menuTrigger{
  margin:10%;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    display: flex;
    background-color: yellow;

  }
`;

export const Navbar = styled.div`
  margin: 0 auto;
  padding: 12px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 1050px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  float: none;
  display: inline-flex;
  padding: 10px;
  img {
    width: 108px;
    height: 108px;
  }
  @media only screen and (max-width: 850px) {
    img {
      width: 72px;
      height: 72px;
    }
  }
`;

export const Menus = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 1180px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  margin: 0 12px;
  a {
    cursor: pointer;
    text-decoration: unset;
    color: white;
    &.active {
      color: yellow;
    }
  }
  color {
    color: red;
    border-bottom: 2px solid yellow;
  }
`;

export const Action = styled.div`
  div.social--link img {
    with: 20px;
    height: 20px;
    padding: 0 8px;
  }

  @media (max-width: 1180px) {
    display: none;
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
    width: auto;
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
