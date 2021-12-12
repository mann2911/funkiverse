import styled, { keyframes } from "styled-components";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { Link } from "react-router-dom";
import { ArrowsAngleExpand } from "@styled-icons/bootstrap/ArrowsAngleExpand";
import { Shrink2 } from "@styled-icons/icomoon/Shrink2";
import { Close } from "@styled-icons/evil/Close";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";
import { ChevronLeft } from "@styled-icons/bootstrap/ChevronLeft";
// import {} from "../../assets/images/icn_swiper-button.svg"
const titleAnimation = keyframes`
from {  
    transform:translateX(110%);
  }
to {
  transform:translateX(0);
}
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
`;
export const Title = styled.div`
padding: 0.5rem 0;
  overflow: hidden;
`;

export const Lable = styled.label`
width: fit-content;
  margin: auto;
  animation: 4s ${titleAnimation} forwards;
  display: block;
  font-size: 36px;
  font-weight: 700;
  @media only screen and (max-width: 1050px) and (min-width: 550px){
    font-size: 30px;
    font-weight: 600;
  }
  @media only screen and (max-width: 550px) and (min-width: 410px) {
    font-size: 24px;
    font-weight: 500;
  }
  @media only screen and (max-width: 410px) {
    font-size: 18px;
    font-weight: 500;
  }
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const WelcomeVideo = styled.video`
  width: 100%;
  height: 100%;
`;
export const JoinusDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const InfoDiv = styled.div`
  border: 6px solid grey;
  padding: 12px;
  max-width: 620px;
  margin: 0 1rem 0 1rem;
  font-size: 18px;
`;

export const JoinUSButton = styled(Link)`
  background-color: white;
  padding: 20px 48px;
  margin: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: unset;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const IntroduceDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const PrologueDiv = styled.div`
width: 50%;
    padding: 1rem 2rem;
    flex 1 1 0;
    min-width:300px;
    max-width:500px;
`;

export const PrologTitle = styled.div`
  text-align: center;
  font-size: 32px;
`;

export const PrologDisc = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 14px;
`;

export const FeellinFunkiDiv = styled.div`
width: 50%;
    padding: 1rem 2rem;
    flex 1 1 0;
    min-width:300px;
    max-width:500px;
`;
export const FeellinFunkiTitle = styled.div`
  text-align: center;
  font-size: 32px;
`;

export const FeellinFunkiDisc = styled.div`
  margin-top: 1rem;
  text-align: center;
  background-color: rgb(154, 138, 120);
  padding: 2rem 4rem;
  text-align: left;
  margin-top: 1rem;
`;
export const Section = styled.div`
  margin-top: 2rem;
  &#introduce {
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
  }

  &#foxes {
    margin-top: 4rem;
    height: 240px;
    .area {
      white-space: nowrap;
    }
  }
`;

export const FoxContainer = styled.div`
  width: 240px;
  height: 250px;
  cursor: pointer;
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
`;
export const Favorite = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
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
  height: 50%;
  padding: 6rem;
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

export const NavbarIcon = styled.div`
  position: static;
  .fox__swiper {
    --swiper-theme-color: var(--corporate-color);
    margin: -10px auto 0 auto;
    padding: 10px 0 32px 0;
    position: static;
    overflow: hidden;
    list-style: none;
    z-index: 1;
  }
  .fox__swiper-outer {
    position: relative;
  }
  .swiper {
    margin-left: unset;
    margin-right: unset;
    position: unset;
  }
  .swiper-button-prev {
    width: 30px;
    height: 30px;
    left: 0px;
    right: auto;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    img {
      transform: rotate(180deg);
      height: 50px;
      width: 50px;
    }
  }
  .swiper-button-next {
    width: 30px;
    height: 30px;
    right: 0px;
    left: auto;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    img {
      height: 50px;
      width: 50px;
    }
  }
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-disabled {
    display: none;
  }
  .swiper-scrollbar {
    height: 10px;
    z-index: 1;
    background: #f5f5f5;
    position: absolute;
    bottom: 3px;
    left: 1%;
    margin-top: 20px;
  }
`;
