import React from "react";
import {
  FoxImage,
  FoxContainer,
  Favorite,
  HearFillIcon,
  HearIcon,
} from "./styles";

const Fox = ({ image, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <FoxContainer className={"swiper-slide"} onClick={() => onClick()}>
      <FoxImage src={image} />
      <Favorite className={"favorite"} onClick={() => onToggleFavorite()}>
        {isFavorite ? <HearFillIcon size={24} /> : <HearIcon size={24} />}
      </Favorite>
    </FoxContainer>
  );
};

export default Fox;
