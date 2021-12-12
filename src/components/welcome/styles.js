import styled from "styled-components";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { ArrowsAngleExpand } from "@styled-icons/bootstrap/ArrowsAngleExpand";
import { Shrink2 } from "@styled-icons/icomoon/Shrink2";
import { Close } from "@styled-icons/evil/Close";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";
import { ChevronLeft } from "@styled-icons/bootstrap/ChevronLeft";
export const Container = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  background-color: rgb(38, 38, 38);
`;

export const Section = styled.div`
  margin-top: 4rem;
  &#what_is {
    margin-top: 2rem;
  }
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
  #welcome_video {
    width: 100%;
    height: 100%;
  }
  color:white &#buyafox {
    margin-top: 4rem;
    padding: 1rem 4rem;
  }
  &#tokenomics {
    margin-top: 4rem;
    padding: 1rem 4rem;
    color: white;
  }
  &#foxes {
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
      justify-content: center;
      flex-direction: column;
    }
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      padding: 2px;
    }
    .foxes-items-1 {
      width: 400px;
      height: 400px;

      @media (max-width: 800px) {
        width: 294px;
        height: 260px;
        display: flex;
        flex-direction: row;
      }
      @media (min-width: 850px) and (max-width: 1050px) {
        width: 464px;
        height: 454px;
      }
    }
    .foxesitems {
      display: flex;
      flex-direction: row;
      width: 63%;
      @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-left: 3%;
      }
      @media (max-width: 1050px) {
        flex-direction: column;
        align-items: center;
      }
    }
    .foxes-items-11 {
      width: 460px;
      height: 400px;
      display: flex;
      @media (max-width: 800px) {
        width: auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    }

    .foxes-items-21 {
      width: 280px;
      height: 400px;
    }
    .foxes-items-22 {
      width: 230px;
      height: 400px;
      display: flex;
      flex-direction: column;
      @media (max-width: 800px) {
        width: 42%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media (max-width: 550px) {
        width: 58%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media (max-width: 500px) {
        width: 77%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media (max-width: 400px) {
        width: 280px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .foxes-items-31 {
      display: flex;
      width: 280px;
      height: 140px;
    }
    .foxes-items-32 {
      width: 280px;
      height: 260px;
    }
    .foxes-items-33 {
      width: 100%;
      height: 100%;
      @media (max-width: 800px) {
        width: 280px;
        height: 260px;
      }
    }
    .foxes-items-4 {
      width: 140px;
      height: 140px;
    }
  }

  &#moredeetz {
    color: white;
    margin-top: 4rem;
    p {
      margin: 2rem 8rem;
    }
    @media (max-width: 800px) {
      p {
        margin: 1rem 1rem;
      }
    }
  }

  &#roadmap {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  &#roadmap {
    margin-top: 4rem;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const WhatIsContent = styled.div`
  display: flex;
  flex: row;
  margin-top: 2rem;
`;
export const DivContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
  .content1 {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 800px) {
      flex-direction: column;
      width: 100%;
    }
  }
  .content2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
      flex-direction: column;
      width: 100%;
    }
  }
  .content1_1 {
    width: 95%;
    height: 44%;
    display: flex;
    flex-direction: row;
  }
  .content1_2 {
    height: 44%;
    padding-top: 1%;
    width: 95%;
    display: flex;
    flex-direction: row;
  }
  .content1_1_1 {
    width: 100%;
    height: 100%;
    display: inline-block;
    margin-left: 8px;
    cursor: pointer;
    position: relative;
    @media (max-width: 800px) {
      height: 155px;
      padding-top: 3px;
    }
    @media (min-width: 750px) and (max-width: 850px) {
      height: 295px;
      padding-top: 3px;
    }
    @media (min-width: 500px) and (max-width: 600px) {
      height: 215px;
      padding-top: 3px;
    }
  }
  .content2_1 {
    padding: 6%;
    color: white;
  }
  .content2_2 {
    padding: 6%;
    color: white;
  }
  .content2_title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
  .content2_title a {
    text-decoration: none;
    background-color: transparent;
    color: white;
  }
`;
export const FoxImages = styled.div`
  width: 50%;
  div.imageContainer {
    width: 282px;
    height: 282px;
    display: inline-block;
    margin: 4px;
  }
`;

export const FoxesCaption = styled.div`
  width: 48%;
  padding: 2rem;
  color: white;
  div.caption--title {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
    a {
      color: white;
      font-weight: bold;
      font-size: 18px;
      &:hover {
        text-decoration: unset;
      }
    }
  }
`;

export const BuyAFoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  position: relative;
  padding: 1rem 2rem;
  z-index: 1;
  color: white;
  @media (max-width: 800px) {
    justify-content: center;
  }
  > p {
    max-width: 220px;
    text-align: center;
    margin: 1rem;
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  div.counter {
    text-align: center;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
      margin: 1rem;
    }
  }

  div.mintBtn {
    background-color: white;
    padding: 1.5rem 4rem;
    width: fit-content;
    margin: 1rem;
    text-align: center;
    span {
      color: black;
      font-weight: bold;
    }
    cursor: pointer;
    @media (max-width: 800px) {
      margin: 1rem;
    }
  }

  div.border-back {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 8px;
    left: 8px;
    background-color: #b3a89a;
    z-index: -1;
  }
  div.back-ground {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: #9a8a78;
    z-index: -1;
  }
`;

export const TokenNomicsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TokenNomicsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  div.imageContainer {
    border: solid 8px white;
    outline: solid 1px black;
    outline-offset: -4px;
    margin-bottom: 12px;
  }
  label {
    text-align: left;
    font-size: 14px;
    @media (max-width: 800px) {
      text-align: center;
      margin: 1rem;
    }
  }
`;

export const TokenNomicsCaption = styled.div`
  margin: 2rem;
  color: #9a8a78;
  text-decoration: underline;
  @media (max-width: 800px) {
    width: 100%;
    margin: 1rem 1rem;
  }
`;

export const LoadmapItem = styled.div`
  width: 40%;
  padding: 16px;
  border: solid 1px #9a8a78;
  color: white;
  @media (max-width: 800px) {
    width: auto;
    padding: 1rem 1rem;
  }
  &.loadmap-caption {
    padding: 2rem 1rem;
    @media (max-width: 800px) {
      width: auto;
      padding: 1rem 1rem;
    }
  }
  video {
    object-fit: cover;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export const LoadmapTitle = styled.div`
  text-align: center;
  color: white;
`;

export const TeamCaption = styled.div`
  padding: 1rem 4rem;
  color: white;
`;

export const TeamMembers = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  @media (max-width: 800px) {
    width: 34%;
  }

  div.imageContainer {
    border: solid 8px white;
    outline: solid 1px black;
    outline-offset: -4px;
  }

  img {
    width: 176px;
    height: 176px;
  }
  label.member-name {
    margin-top: 8px;
    text-align: center;
    color: white;
    margin-bottom: 0.5rem;
  }
  label.member-caption {
    color: #9a8a78;
    width: 70%;
    text-align: center;
    @media (max-width: 800px) {
      width: 100%;
      margin: 1rem;
      margin-bottom: 30px;
    }
  }
`;
export const DivContent6 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  color: white;
  justify-content: space-evenly;
  .caption_link {
    @media (max-width: 800px) {
      width: 100%;
      margin: 1rem;
      word-break: break-word;
    }
  }
  margin-top: 5rem;
  a {
    color: rgb(154, 138, 120);
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Address = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

export const AddressTitle = styled.span`
  color: white;
  margin-right: 4rem;
`;

export const AddressContent = styled.a`
  color: #9a8a78;
  text-decoration: under-line;
`;

export const FoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  margin: 8px;
  cursor: pointer;
  position: relative;
  &:hover {
    background: #dddddd;
    .favorite {
      display: flex;
    }
    img {
      opacity: 0.5;
    }
  }
`;

export const FoxImage = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const Favorite = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: none;
`;

export const HearIcon = styled(Heart)`
  color: black;
`;

export const HearFillIcon = styled(HeartFill)`
  color: red;
`;

export const FullScreenFoxes = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  color: white;
  z-index: 999;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    padding: 1rem;
  }
`;

export const FullScreenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
  font-size: 32px;
`;

export const ArrowsAngleExpandIcon = styled(ArrowsAngleExpand)`
  color: white;
  cursor: pointer;
`;

export const Shrink2Icon = styled(Shrink2)`
  color: white;
  cursor: pointer;
`;

export const HearWhiteIcon = styled(Heart)`
  color: white;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  color: white;
  cursor: pointer;
  @media (max-width: 800px) {
    padding-left: 130px;
  } ;
`;

export const HeaderRight = styled.div``;

export const FullScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    height: 50%;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  padding: 6rem;
  height: 50%;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const RightIcon = styled.div``;

export const ChevronRightIcon = styled(ChevronRight)`
  color: white;
  cursor: pointer;
`;

export const SliderFoxImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 800px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const LeftIcon = styled.div``;

export const ChevronLeftIcon = styled(ChevronLeft)`
  color: white;
  cursor: pointer;
`;

export const ContentCaption = styled.div`
  padding-top: 2rem;
  font-size: 28px;
  font-weight: bold;
  word-break: break-word;
  width: 38%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    word-break: break-word;
    align-items: center;
  }
  .fox-caption-content {
    margin: auto;
    @media (max-width: 800px) {
      margin: 0px;
    }
  }
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
