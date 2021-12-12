import React from "react";
import {
  HearIcon,
  HearFillIcon,
  Favorite,
  FoxImage,
  FoxContainer,
} from "./styles";

const Fox = ({ name, image, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <FoxContainer onClick={() => onClick()}>
      <FoxImage src={image} />
      <Favorite
        className={"favorite"}
        onClick={(event) => {
          event.stopPropagation();
          onToggleFavorite();
        }}
      >
        {isFavorite ? <HearFillIcon size={24} /> : <HearIcon size={24} />}
      </Favorite>
    </FoxContainer>
  );
};

export default Fox;
