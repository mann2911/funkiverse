import React, { useState, useEffect } from "react";
import Footer from "../commonComponents/Footer";
import Headerbar from "../commonComponents/Header";
import Menu from "../commonComponents/sidebar";
import { Overlay, ModalView } from "./styles";
import Img20 from "../assets/images/welcome_img20.png";

import { Modal } from "../commonComponents/Modal/modal";
const Layout = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isPopOpen, setIsPosOpen] = useState(false);
  const togglePopOpen = () => {
    setIsPosOpen(!isPopOpen);
  };

  const toggleMenu = (value) => {
    setIsOpenMenu(value);
  };
  useEffect(() => {
    if (isPopOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopOpen]);
  return (
    <React.Fragment>
      <Headerbar
        togglePopOpen={togglePopOpen}
        isOpenMenu={isOpenMenu}
        toggleMenu={toggleMenu}
      />
      {/* {isOpenMenu && ( */}
      <Menu
        togglePopOpen={togglePopOpen}
        open={isOpenMenu}
        toggleMenu={toggleMenu}
      />
      {/* )} */}
      {isOpenMenu && <Overlay onClick={() => toggleMenu(false)}></Overlay>}
      {props.children}
      <Footer />
      <div
        onClick={() => {
          setIsPosOpen(!isPopOpen);
        }}
      >
        <Modal show={isPopOpen} handleClose={() => togglePopOpen()}>
          <ModalView>
            <div className="div1">
              <div className="div2">Connect to a Wallet</div>
              <div className="div3">
                <a
                  target="_blank"
                  onClick={() => togglePopOpen()}
                  href="https://metamask.io/"
                  rel="noopener noreferrer"
                >
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
      </div>
    </React.Fragment>
  );
};

export default Layout;
