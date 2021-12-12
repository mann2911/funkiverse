import React from "react";
import gallery from "../../assets/images/gallery.png";
import {
  Caption,
  Container,
  Logo,
  Title,
  ImageWrapper,
  Image,
} from "./styles";

const Gallery = (props) => {
  return (
    <Container>
      <div>
        <Title>GALLERY</Title>
        <Caption>
          The complete gallery would be published after the initial sale :)
        </Caption>
      </div>
      <Logo>
        <ImageWrapper>
          <Image src={gallery} alt={"Masked Fox"} />
        </ImageWrapper>
      </Logo>
    </Container>
  );
};

export default Gallery;
