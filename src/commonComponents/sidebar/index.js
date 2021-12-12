import React from "react";
import {
  StyledMenu,
  CloseBtn,
  CloseContainer,
  Action,
  StyledLink,
} from "./styles";
import medium from "../../assets/images/logo-medium.png";
import instagram from "../../assets/images/link_instagram.png";
import twitter from "../../assets/images/link_twitter.png";
import youtube from "../../assets/images/logo-discord.png";
import tumblr from "../../assets/images/logo-opensea.png";
import { useLocation } from "react-router";

const Menu = ({ open, ...props }) => {
  const loc = useLocation();
  const currentPath = loc.pathname + loc.hash;
  return (
    <>
      <StyledMenu open={open} {...props}>
        <CloseContainer>
          <CloseBtn size={40} onClick={() => props.toggleMenu(false)} />
        </CloseContainer>

        <StyledLink
          className={currentPath === "/welcome" ? "active" : ""}
          onClick={() => props.toggleMenu(false)}
          to="/welcome"
        >
          Welcome
        </StyledLink>

        <StyledLink
          className={currentPath === "/welcome#buyafox" ? "active" : ""}
          onClick={() => props.toggleMenu(false)}
          to={{ pathname: "/welcome", hash: "#buyafox" }}
        >
          Buy a Fox
        </StyledLink>

        <StyledLink
          className={currentPath === "/welcome#roadmap" ? "active" : ""}
          to={{ pathname: "/welcome", hash: "#roadmap" }}
          onClick={() => props.toggleMenu(false)}
        >
          RoadMap
        </StyledLink>

        <StyledLink
          className={currentPath === "/welcome#team" ? "active" : ""}
          onClick={() => props.toggleMenu(false)}
          to={{ pathname: "/welcome", hash: "#team" }}
        >
          Team
        </StyledLink>

        <StyledLink
          className={currentPath === "/provenance" ? "active" : ""}
          onClick={() => props.toggleMenu(false)}
          to="/provenance"
        >
          Provenance
        </StyledLink>

        <StyledLink
          className={currentPath === "/gallery" ? "active" : ""}
          onClick={() => props.toggleMenu(false)}
          to="/gallery"
        >
          Gallery
        </StyledLink>

        <Action>
          <div className="social--link">
            <a
              href="https://funkifoxes.medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={medium} alt={"medium"} />
            </a>
            <a
              href="https://twitter.com/FunkiFoxes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt={"twitter"} />
            </a>
            <a
              href="https://instagram.com/funkifoxes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt={"instagram"} />
            </a>
            <a
              href="https://discord.gg/RmnteYEZ5h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt={"youtube"} />
            </a>
            <a
              href="https://opensea.io/collection/funkifoxes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tumblr} alt={"tumblr"} />
            </a>
          </div>
          <div
            className="connect--btn"
            onClick={() => {
              props.togglePopOpen();
              props.toggleMenu(false);
            }}
          >
            Connect To a Wallet
          </div>
        </Action>
      </StyledMenu>
    </>
  );
};

export default Menu;
