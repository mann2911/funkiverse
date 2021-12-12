import React, { useState, useEffect } from "react";
import {
  ArrowsAngleExpandIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ContentCaption,
  ContentImage,
  FullScreenContent,
  FullScreenFoxes,
  FullScreenHeader,
  HeaderLeft,
  HeaderRight,
  HearFillIcon,
  HearWhiteIcon,
  LeftIcon,
  ModalView,
  RightIcon,
  Section,
  Shrink2Icon,
  SliderFoxImage,
  Container,
  SectionTitle,
  WhatIsContent,
  DivContent,
  BuyAFoxContent,
  TokenNomicsCaption,
  TokenNomicsContainer,
  TokenNomicsItem,
  LoadmapItem,
  LoadmapTitle,
  TeamCaption,
  TeamMembers,
  TeamMember,
  DivContent6,
} from "./styles";
import Fox from "./fox";
import Video from "../../assets/videos/InsideTavern.mp4";
import Video2 from "../../assets/videos/video2.mp4";
import Img1 from "../../assets/images/welcome_img1.png";
import Img2 from "../../assets/images/welcome_img2.png";
import Img3 from "../../assets/images/welcome_img3.png";
import Img4 from "../../assets/images/welcome_img4.png";
import Img5 from "../../assets/images/welcome_img5.png";
import Img6 from "../../assets/images/welcome_img6.png";
import Img7 from "../../assets/images/welcome_img7.png";
import Img8 from "../../assets/images/welcome_img8.png";
import Img9 from "../../assets/images/welcome_img9.png";
import Img10 from "../../assets/images/welcome_img10.png";
import Img11 from "../../assets/images/welcome_img11.png";
import Img12 from "../../assets/images/welcome_img12.png";
import Img13 from "../../assets/images/welcome_img13.png";
import Img14 from "../../assets/images/welcome_img14.png";
import Img15 from "../../assets/images/welcome_img15.png";
import Img16 from "../../assets/images/welcome_img16.png";
import Img17 from "../../assets/images/welcome_img17.png";
import Img18 from "../../assets/images/welcome_img18.png";
import Img19 from "../../assets/images/welcome_img19.png";
import Img20 from "../../assets/images/welcome_img20.png";
import { Modal } from "../../commonComponents/Modal/modal";
import { useLocation } from "react-router-dom";
const Welcome = () => {
  const [favorites, setFavorites] = useState([]);
  const [activeFox, setActiveFox] = useState();
  const [isFull, setIsFull] = useState(false);
  const [isPopOpen, setIsPosOpen] = React.useState(false);

  const history = useLocation();

  useEffect(() => {
    const element = document.getElementById(history.hash.replace("#", ""));
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  });
  const moreFoxes = [
    { id: 1, name: "more-1", image: Img19 },
    { id: 2, name: "more-2", image: Img18 },
    { id: 3, name: "more-3", image: Img17 },
    { id: 4, name: "more-4", image: Img16 },
    { id: 5, name: "more-5", image: Img15 },
    { id: 6, name: "more-6", image: Img14 },
    { id: 7, name: "more-7", image: Img14 },
  ];
  const funkiFoxes = [
    { id: 8, name: "funki-1", image: Img1 },
    { id: 9, name: "funki-2", image: Img2 },
    { id: 10, name: "funki-3", image: Img3 },
    { id: 11, name: "funki-4", image: Img4 },
  ];
  const onToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  const onClick = (id) => {
    let fox = moreFoxes.find((f) => f.id === id);
    if (!fox) {
      fox = funkiFoxes.find((f) => f.id === id);
    }

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
      moreFoxes.forEach((f, i) => {
        if (f.id === activeFox.id) {
          index = i;
        }
      });
      let foxes = moreFoxes;
      if (index < 0) {
        funkiFoxes.forEach((f, i) => {
          if (f.id === activeFox.id) {
            index = i;
          }
        });
        foxes = funkiFoxes;
      }

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
    <Container>
      <Section id="welcome_video">
        <video
          src={Video}
          preload="auto"
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
        ></video>
      </Section>

      <Section id="what_is">
        <SectionTitle>WHAT IS FUNKI FOXES?</SectionTitle>
        <WhatIsContent>
          <DivContent>
            <div className="content1">
              <div className="content1_1">
                <div className="content1_1_1">
                  <Fox
                    name="funki-1"
                    image={Img1}
                    isFavorite={favorites.includes(8)}
                    onToggleFavorite={() => onToggleFavorite(8)}
                    onClick={() => onClick(8)}
                  />
                </div>
                <div className="content1_1_1">
                  <Fox
                    name="funki-2"
                    image={Img2}
                    isFavorite={favorites.includes(9)}
                    onToggleFavorite={() => onToggleFavorite(9)}
                    onClick={() => onClick(9)}
                  />
                </div>
              </div>
              <div className="content1_2">
                <div className="content1_1_1">
                  <Fox
                    name="funki-3"
                    image={Img3}
                    isFavorite={favorites.includes(10)}
                    onToggleFavorite={() => onToggleFavorite(10)}
                    onClick={() => onClick(10)}
                  />
                </div>
                <div className="content1_1_1">
                  <Fox
                    name="funki-4"
                    image={Img4}
                    isFavorite={favorites.includes(11)}
                    onToggleFavorite={() => onToggleFavorite(11)}
                    onClick={() => onClick(11)}
                  />
                </div>
              </div>
            </div>
            <div className="content2">
              <div className="content2_1">
                <br />
                <br />
                <p>
                  The Funki Foxes are a collection of 12,000 algorithmically
                  generated digital collectibles living the luxury life on the
                  Ethereum blockchain.
                </p>
                <br />
                <p>
                  Each Funki Fox is a unique token which also serves as proof of
                  your Funkizen status. This gives you access to members-only
                  benefits, a voice in the community and the undiscovered perks
                  of the Funkiverse; the first category of which can be unlocked
                  by the community through the roadmap.
                </p>
              </div>
              <div className="content2_2">
                <div className="content2_title">
                  EQUITABLE DISTRIBUTION
                </div>
                <div className="content2_content">
                  <p>
                    The only tiers we acknowledge are cake tiers. Purchasing a
                    Funki Fox costs 0.1 ETH. It's the same for everyone.
                  </p>
                </div>
              </div>
            </div>
          </DivContent>
        </WhatIsContent>
      </Section>
      <Section id={"buyafox"}>
        <SectionTitle>BUY A FOX</SectionTitle>
        <BuyAFoxContent>
          <div className={"border-back"} />
          <div className={"back-ground"} />
          <p>
            Minting will be available here on launch date! <br />{" "}
          </p>
          <div className={"counter"}>
            <div
              id="tempModal"
              className={"mintBtn"}
              onClick={() => {
                setIsPosOpen(!isPopOpen);
              }}
            >
              {isPopOpen && (
                <Modal show={isPopOpen} handleClose={() => setIsPosOpen(false)}>
                  <ModalView>
                    <div className="div1">
                      <div className="div2">Connect to a Wallet</div>
                      <div className="div3">
                        <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/">
                          <div className="div4">
                            <span className="span1">Install Metamax</span>
                            <span>
                              <img src={Img20} width="35px" alt="" height="35px" />
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </ModalView>
                </Modal>
              )}

              <span>Connect Wallet</span>
            </div>
            <label>12,000 / 2</label>
          </div>

          <div
            className={"mintBtn"}
            onClick={() => {
              setIsPosOpen(!isPopOpen);
            }}
          >
            <Modal show={isPopOpen} handleClose={() => setIsPosOpen(false)}>
              <ModalView>
                <div className="div1">
                  <div className="div2">Connect to a Wallet</div>
                  <div className="div3">
                    <a target="_blank" href="https://metamask.io/" rel="noopener noreferrer" >
                      <div className="div4">
                        <span className="span1">Install Metamax</span>
                        <span>
                          <img src={Img20} width="35px" alt="" height="35px" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </ModalView>
            </Modal>

            <span>Connect Wallet</span>
          </div>
        </BuyAFoxContent>
      </Section>

      <Section id={"tokenomics"}>
        <SectionTitle>TOKENOMICS</SectionTitle>
        <TokenNomicsContainer>
          <TokenNomicsItem>
            <div className={"imageContainer"}>
              <img alt="" src={Img5} />
            </div>
            <label>
              12,000
              <br />
              Rare Tokens
            </label>
          </TokenNomicsItem>
          <TokenNomicsItem>
            <div className={"imageContainer"}>
              <img alt="" src={Img6} />
            </div>
            <label>
              Fair
              <br />
              Distribution
            </label>
          </TokenNomicsItem>
          <TokenNomicsItem>
            <div className={"imageContainer"}>
              <img alt="" src={Img7} />
            </div>
            <label>
              Commercial
              <br />
              License
            </label>
          </TokenNomicsItem>
          <TokenNomicsItem>
            <div className={"imageContainer"}>
              <img alt="" src={Img8} />
            </div>
            <label>
              10%
              <br />
              Royalties
            </label>
          </TokenNomicsItem>
          <TokenNomicsItem>
            <div className={"imageContainer"}>
              <img alt="" src={Img9} />
            </div>
            <label>
              More Offerings
              <br />
              Through Roadmap
            </label>
          </TokenNomicsItem>
        </TokenNomicsContainer>
        <TokenNomicsCaption>
          <span>
            Note: 500 tokens would be reserved from the initial sale for the
            team and also to be used in giveaways, raffles, airdrops & for
            competitions.
          </span>
        </TokenNomicsCaption>
      </Section>

      <Section id={"foxes"}>
        <div className={"foxes-items-11"}>
          <div className={"foxes-items-21"}>
            <div className={"foxes-items-31"}>
              <div className={"foxes-items-4"}>
                <Fox
                  name={"more-1"}
                  image={Img19}
                  isFavorite={favorites.includes(1)}
                  onToggleFavorite={() => onToggleFavorite(1)}
                  onClick={() => onClick(1)}
                />
              </div>
              <div className={"foxes-items-4"}>
                <Fox
                  name={"more-2"}
                  image={Img18}
                  isFavorite={favorites.includes(2)}
                  onToggleFavorite={() => onToggleFavorite(2)}
                  onClick={() => onClick(2)}
                />
              </div>
            </div>
            <div className={"foxes-items-32"}>
              <Fox
                name={"more-3"}
                image={Img17}
                isFavorite={favorites.includes(3)}
                onToggleFavorite={() => onToggleFavorite(3)}
                onClick={() => onClick(3)}
              />
            </div>
          </div>
          <div className={"foxes-items-22"}>
            <div className={"foxes-items-33"}>
              <Fox
                name={"more-4"}
                image={Img16}
                isFavorite={favorites.includes(4)}
                onToggleFavorite={() => onToggleFavorite(4)}
                onClick={() => onClick(4)}
              />
            </div>
            <div className={"foxes-items-33"}>
              <Fox
                name={"more-5"}
                image={Img15}
                isFavorite={favorites.includes(5)}
                onToggleFavorite={() => onToggleFavorite(5)}
                onClick={() => onClick(5)}
              />
            </div>
          </div>
        </div>
        <div className={"foxesitems"}>
          <div className={"foxes-items-1"}>
            <Fox
              name={"more-6"}
              image={Img14}
              isFavorite={favorites.includes(6)}
              onToggleFavorite={() => onToggleFavorite(6)}
              onClick={() => onClick(6)}
            />
          </div>
          <div className={"foxes-items-1"}>
            <Fox
              name={"more-6"}
              image={Img14}
              isFavorite={favorites.includes(6)}
              onToggleFavorite={() => onToggleFavorite(6)}
              onClick={() => onClick(6)}
            />
          </div>
        </div>
      </Section>

      <Section id={"moredeetz"}>
        <SectionTitle>MORE DEETZ</SectionTitle>
        <p>
          When you purchase a Funki Fox, it's not just any kinda art piece that
          you're buying. You are getting a stunning avatar that's a provably
          rare piece of art which can be utilized as your digital identity.
          You're also acquiring access to an exclusive universe whose advantages
          and value would improve with time. <br />
          <br />
          Each Funki Fox is a 1/1 provably rare unique art piece which is
          algorithmically generated from a selection of over 180 properties that
          include outfits, hats, enhancements and so much more. All the Funki
          Foxes are special in their own way, but some are rarer than others.{" "}
          <br />
          <br />
          The foxes are stored as ERC-721 standard tokens on the Ethereum
          blockchain and are hosted on IPSF. Buying a fox is the same for
          everyone and costs 0.1 ETH.
        </p>
      </Section>

      <Section id={"roadmap"}>
        <LoadmapItem className={"loadmap-caption"}>
          <LoadmapTitle>ROADMAP</LoadmapTitle>
          <p>
            We envisioned this as a long term project and with that conviction
            in mind, we set some missions to accomplish at certain stages.
          </p>

          <ul>
            <li>10% : Airdrop to 12 random wallets holding the FUFO token.</li>
            <li>
              20% : Exclusive Funkizen Merch store is launched with surprise
              unlockables.
            </li>
            <li>30% : ETH raffle for Funkizens.</li>
            <li>
              40% : We release the treasure hunts with various prizes up for
              grabs.
            </li>
            <li>50% : Activation of the Funki Foxes liquidity pool.</li>
            <li>
              60% : 120 hodlers would be selected to receive custom prints of
              their Funki Foxes.
            </li>
            <li>
              70% : We release a limited collection of digital trading cards.
            </li>
            <li>
              90% : We go hunting for some virtual land where we can all
              hangout.
            </li>
            <li>90% : Unveiling the Tavern.</li>
            <li>100% : Advancing deep into the Funkiverse.</li>
          </ul>
        </LoadmapItem>
        <LoadmapItem>
          <video
            src={Video2}
            width="100%"
            height="100%"
            autoPlay={true}
            loop={true}
            muted
          ></video>
        </LoadmapItem>
      </Section>

      <Section id={"team"}>
        <SectionTitle>MEET THE TEAM</SectionTitle>
        <TeamCaption>
          The Funki Foxes project was put together by a group of 4 friends who
          decided to create some amazing foxes, utilize our skills and all our
          years of combined research and attempt to birth a new weird world.
        </TeamCaption>
        <TeamMembers>
          <TeamMember>
            <div className={"imageContainer"}>
              <img src={Img10} alt={"team1"} />
            </div>
            <label className={"member-name"}>AeroFox</label>
            <label className={"member-caption"}>
              Purifier Of <br />
              Frequencies
            </label>
          </TeamMember>
          <TeamMember>
            <div className={"imageContainer"}>
              <img src={Img11} alt={"team2"} />
            </div>
            <label className={"member-name"}>Funkiveller</label>
            <label className={"member-caption"}>
              Interdimensional Traveller
            </label>
          </TeamMember>
          <TeamMember>
            <div className={"imageContainer"}>
              <img src={Img12} alt={"team3"} />
            </div>
            <label className={"member-name"}>Old Baron</label>
            <label className={"member-caption"}>
              Always Working Towards Improvement
            </label>
          </TeamMember>
          <TeamMember>
            <div className={"imageContainer"}>
              <img src={Img13} alt={"team4"} />
            </div>
            <label className={"member-name"}>Gervixen</label>
            <label className={"member-caption"}>
              Foodie & Motivational Speaker
            </label>
          </TeamMember>
        </TeamMembers>
      </Section>
      <DivContent6>
        <span>VERIFIED SMART CONTRACT ADDRESS:</span>
        <div className="caption_link">
          <a
            href="https://rinkeby.etherscan.io/address/0x1ba7fa883c3fb8ab901ac65e69fdeaedd8ba9ea2#code"
            target="_blank"
            className="sc-laTMn gbJcvo"
            rel="noopener noreferrer"
          >
            0x1bA7fa883C3Fb8Ab901aC65e69FdEAEdd8BA9Ea2
          </a>
        </div>
      </DivContent6>
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
                  src={activeFox.image}
                  alt={activeFox.name}
                  width="100%"
                  height="100%"
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
  );
};

export default Welcome;
