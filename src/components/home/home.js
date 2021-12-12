import React, { useState } from "react";
import {
  Container,
  FeellinFunkiDisc,
  FeellinFunkiDiv,
  FeellinFunkiTitle,
  InfoDiv,
  IntroduceDiv,
  JoinUSButton,
  JoinusDiv,
  Lable,
  PrologDisc,
  PrologTitle,
  PrologueDiv,
  Title,
  VideoContainer,
  WelcomeVideo,
  FullScreenFoxes,
  FullScreenHeader,
  HeaderLeft,
  Shrink2Icon,
  ArrowsAngleExpandIcon,
  HearFillIcon,
  HearWhiteIcon,
  HeaderRight,
  CloseIcon,
  FullScreenContent,
  ContentImage,
  LeftIcon,
  ChevronLeftIcon,
  SliderFoxImage,
  RightIcon,
  ChevronRightIcon,
  ContentCaption,
  NavbarIcon,
} from "./styles";
import Video from "../../assets/videos/welcome_1.mp4";
import Footer from "../../commonComponents/Footer";
import Fox from "./fox";
import prevNextButton from "../../assets/images/icn_swiper-button.svg";
import foxImg1 from "../../assets/custom/1.png";
import foxImg2 from "../../assets/custom/2.png";
import foxImg3 from "../../assets/custom/3.png";
import foxImg4 from "../../assets/custom/4.png";
import foxImg5 from "../../assets/custom/5.png";
import foxImg6 from "../../assets/custom/6.png";
import foxImg7 from "../../assets/custom/7.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/lazy/lazy.min.css";

const foxes = [
  { id: "1", name: "name1", image: foxImg1 },
  { id: "2", name: "name2", image: foxImg2 },

  { id: "3", name: "name3", image: foxImg3 },

  { id: "4", name: "name4", image: foxImg4 },

  { id: "5", name: "name5", image: foxImg5 },

  { id: "6", name: "name6", image: foxImg6 },

  { id: "7", name: "name7", image: foxImg7 },
];

const Home = () => {
  const [favorites, setFavorites] = useState([]);
  const [activeFox, setActiveFox] = useState();
  const [isFull, setIsFull] = useState(false);

  const onToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  const onClick = (id) => {
    let fox = foxes.find((f) => f.id === id);

    if (fox) {
      setActiveFox(fox);
    }
  };
  const toggleFullScreen = () => {
    let document = window.document;
    let elem = document.documentElement;
    if (!isFull) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFull(!isFull);
  };
  const onMoveActive = (next = false) => {
    if (activeFox) {
      let index = -1;
      foxes.forEach((f, i) => {
        if (f.id === activeFox.id) {
          index = i;
        }
      });

      if (next) {
        index++;
        index = index % foxes.length;
      } else {
        index--;
        if (index < 0) {
          index = foxes.length - 1;
        }
      }
      setActiveFox(foxes[index]);
    }
  };
  return (
    <>
      <Container>
        <Title>
          <Lable>WELCOME TO THE FUNKIVERSE</Lable>
        </Title>
        <VideoContainer>
          <WelcomeVideo src={Video} type="video/mp4" loop autoPlay muted />
        </VideoContainer>
        <JoinusDiv>
          <InfoDiv>
            An exclusive NFT collection where the token grants you Funkizen
            status. Funkizens have the prospect for co-creating the future of
            the Funkiverse and also access to all it's undiscovered benefits.
          </InfoDiv>
          <JoinUSButton to="/welcome">Join US</JoinUSButton>
        </JoinusDiv>
        <IntroduceDiv>
          <PrologueDiv>
            <PrologTitle>PROLOGUE</PrologTitle>
            <PrologDisc>
              12 millennia after an induced hibernation, a skulk of foxes awaken
              to discover themselves in the peculiar caves of Zoza. Following
              their awakening from this unnatural slumber, they searched within
              the caves and its surroundings in vain for a place to quench their
              thirst.
              <br />
              <br />
              Leaving the caves, they journeyed through the thick forest and
              eventually stumbled upon a shack that looked like it had seen
              better days. Luckily for them, the place was open but the only
              option available was a purple sparkly liquid labelled "Funki
              Juice"
              <br />
              <br />
              With no choice or options left, they quickly chugged this down and
              before any of them could even realize, it triggered a series of
              irreversible transformations and teleported them straight into a
              magical alternate universe called the Funkiverse.
              <br />
              <br />
              These foxes became known as the Funki Foxes.
            </PrologDisc>
          </PrologueDiv>
          <FeellinFunkiDiv>
            <FeellinFunkiTitle>FEELIN FUNKI?</FeellinFunkiTitle>
            <FeellinFunkiDisc>
              SIMPLE GAME LIKE THE ONE ON PICKLES.
              <br />
              <br />
              FOR LANDING PAGE VISITORS TO INTERACT WITH WEBSITE.
              <br />
              <br />
              100% = Free fox.
              <br />
              <br />
              You can put 20 FREE FOX "TICKETS" in the game, so if someone wins,
              they can enter their email and eth address in a simple form.
            </FeellinFunkiDisc>
          </FeellinFunkiDiv>
        </IntroduceDiv>
        <NavbarIcon>
          <div className="fox__swiper-outer">
            <div className={"area fox__swiper"}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                slidesPerView={"auto"}
                spaceBetween={8}
                speed={800}
                className=".fox__swiper"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                scrollbar={{
                  el: ".swiper-scrollbar",
                  draggable: true,
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
              >
                <div className={"swiper-button-prev"}>
                  {" "}
                  <img src={prevNextButton} alt="Prev Button" />{" "}
                </div>
                <div className={"swiper-button-next"}>
                  {" "}
                  <img src={prevNextButton} alt="Next Button" />{" "}
                </div>
                {foxes.map((fox, index) => (
                  <SwiperSlide key={fox.id} style={{ width: "fit-content" }}>
                    <Fox
                      image={fox.image}
                      isFavorite={favorites.includes(fox.id)}
                      onToggleFavorite={() => onToggleFavorite(fox.id)}
                      onClick={() => onClick(fox.id)}
                    />
                  </SwiperSlide>
                ))}

                <div className={"swiper-scrollbar"} />
              </Swiper>
            </div>
          </div>
        </NavbarIcon>
        {activeFox ? (
          <FullScreenFoxes>
            <FullScreenHeader>
              <HeaderLeft>
                {isFull ? (
                  <Shrink2Icon size={48} onClick={toggleFullScreen} />
                ) : (
                  <ArrowsAngleExpandIcon size={48} onClick={toggleFullScreen} />
                )}
                {favorites.includes(activeFox.id) ? (
                  <>
                    <HearFillIcon
                      size={48}
                      onClick={() => onToggleFavorite(activeFox.id)}
                    />{" "}
                    1
                  </>
                ) : (
                  <HearWhiteIcon
                    size={48}
                    onClick={() => onToggleFavorite(activeFox.id)}
                  />
                )}
              </HeaderLeft>
              <HeaderRight>
                <CloseIcon size={48} onClick={() => setActiveFox(null)} />
              </HeaderRight>
            </FullScreenHeader>
            <FullScreenContent>
              <ContentImage>
                <LeftIcon>
                  <ChevronLeftIcon
                    size={48}
                    onClick={() => onMoveActive(false)}
                  />
                </LeftIcon>
                <SliderFoxImage>
                  <img
                    width="100%"
                    height="100%"
                    src={activeFox.image}
                    alt={activeFox.name}
                  />
                </SliderFoxImage>
                <RightIcon>
                  <ChevronRightIcon
                    size={48}
                    onClick={() => onMoveActive(true)}
                  />
                </RightIcon>
              </ContentImage>
              <ContentCaption>
                <div className={"fox-caption-content"}>
                  <div className={"fox-name"}>{activeFox.id}</div>
                  <div className={"fox-caption"}>{activeFox.name}</div>
                </div>
              </ContentCaption>
            </FullScreenContent>
          </FullScreenFoxes>
        ) : null}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
