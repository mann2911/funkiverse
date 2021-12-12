import React, { useState } from "react";
import footer from "../../assets/images/logo-footer.png";
import medium from "../../assets/images/logo-medium.png";
import instagram from "../../assets/images/link_instagram.png";
import twitter from "../../assets/images/link_twitter.png";
import youtube from "../../assets/images/logo-discord.png";
import tumblr from "../../assets/images/logo-opensea.png";
import {
  Action,
  ChevronRightIcon,
  Container,
  Content,
  CopyRight,
  FlexBox,
  H5,
  Inner,
  Logo,
  MailBtn,
  MailForm,
  SendMail,
} from "./styles";
import { Link } from "react-router-dom";

const Footer = ({ history }) => {
  const [mail, setMail] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <Inner>
        <Content>
          <FlexBox>
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
              <div className="terms">
                <a
                  href="https://spaistilabs.wixsite.com/website/general-5-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </div>
              <div className="others">
                <a
                  href="https://spaistilabs.wixsite.com/website/about-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethos
                </a>
                <a
                  href="https://spaistilabs.wixsite.com/website/general-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQs
                </a>
              </div>
            </Action>
          </FlexBox>
          <FlexBox>
            <Logo className="float-none">
              <Link to="/">
                <img src={footer} alt={"logo"} />
              </Link>
            </Logo>
          </FlexBox>
          <FlexBox>
            <SendMail>
              <H5>JOIN OUR MAILING LIST</H5>
              <MailForm>
                <div>
                  <input
                    type={"text"}
                    placeholder={"Email*"}
                    name={"email"}
                    id={"email"}
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <input
                    type={"text"}
                    className={"thanks--joining"}
                    placeholder={"Message*"}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <MailBtn onClick={() => { }}>
                  <ChevronRightIcon size={32} />
                </MailBtn>
              </MailForm>
            </SendMail>
          </FlexBox>
        </Content>
        <CopyRight>© 2021 by Funki Labs Ltd.</CopyRight>
      </Inner>
    </Container>
  );
};

export default Footer;
