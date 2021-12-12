import React from "react";
import {
  Container,
  Action,
  Logo,
  Menus,
} from "./styles";
import Menu from "./menu";
import logo from "../../assets/images/logo-header.png";
import medium from "../../assets/images/logo-medium.png";
import instagram from "../../assets/images/link_instagram.png";
import twitter from "../../assets/images/link_twitter.png";
import youtube from "../../assets/images/logo-discord.png";
import tumblr from "../../assets/images/logo-opensea.png";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Headerbar = (props) => {
  const history = useLocation();

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logo} alt={"logo"} />
        </Link>
      </Logo>
      <div
        className="menutriggerButton"
        onClick={(e) => props.toggleMenu(!props.isOpenMenu)}
      >
        <div className="menuTrigger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <Menus>
        <Menu history={history} path="/welcome" hash={""} label="WELCOME" />
        <Menu
          history={history}
          path="/welcome"
          hash={"#buyafox"}
          label="BUY A FOX"
        />
        <Menu
          history={history}
          path="/welcome"
          hash={"#roadmap"}
          label="ROADMAP"
        />
        <Menu history={history} path="/welcome" hash={"#team"} label="TEAM" />
        <Menu history={history} path="/provenance" label="PROVENANCE" />
        <Menu history={history} path="/gallery" label="GALLERY" />
      </Menus>
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
          }}
        >
          Connect to a wallet
        </div>
      </Action>
    </Container>
  );
};

export default Headerbar;
