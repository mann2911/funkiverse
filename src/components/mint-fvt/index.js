import React from "react";
import {
  CardSection,
  Container,
  Section,
  Introduce,
  IntroduceContent,
  IntroduceTitle,
  MintVipBtn,
  Title,
  Image,
  ImageWrapper,
  ImageFull,
  AlignCenter,
  Anchor
} from "./styles";
import fvt_gif from "../../assets/images/FVT.gif";
import front from "../../assets/images/FVT_Front.png";
import back from "../../assets/images/FVT_Back.png";

const MintFvt = () => {
  return (
    <Container>
      <Section>
        <Title>
          <label>WELCOME TO VIP CHANNEL</label>
        </Title>
      </Section>
      <Section>
        <IntroduceTitle>Funki VIP Token</IntroduceTitle>
        <IntroduceContent>
          <Image src={fvt_gif} />
        </IntroduceContent>
      </Section>

      <CardSection>
        <Introduce>
          <IntroduceTitle>FVT CARD FRONT</IntroduceTitle>
          <IntroduceContent>
            <ImageWrapper>
              <ImageFull src={front} />
            </ImageWrapper>
          </IntroduceContent>
        </Introduce>
        <Introduce>
          <IntroduceTitle>FVT CARD BACK</IntroduceTitle>
          <IntroduceContent>
            <ImageWrapper>
              <ImageFull src={back} />
            </ImageWrapper>
          </IntroduceContent>
        </Introduce>
      </CardSection>
      <Section>
        <AlignCenter>
          <MintVipBtn> Connect To Wallet</MintVipBtn>
        </AlignCenter>
      </Section>
      <Section>
        <AlignCenter>
          FVT Smart Contract:{" "}
          <Anchor
            href="https://rinkeby.etherscan.io/address/0x55afa062a9cc7a27fd42dd9f08b9a8da044e9bb9"
            target="_blank"
            rel="noopener noreferrer"
          >
            0x55afa062a9cc7a27FD42DD9F08B9a8dA044e9bB9
          </Anchor>
        </AlignCenter>
      </Section>
    </Container>
  );
};

export default MintFvt;
