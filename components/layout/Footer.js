import { useState } from "react";
import Style from "./footerStyle.module.css";
import Mobile from "./footerMobileStyle.module.css";

import {
  shop,
  explore,
  support,
  company,
  followUs,
} from "@/Constants/Const";

function Footer() {
  // const shop = useRef();
  // const explore = useRef();
  // const shop = useRef();
  // const shop = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = (e) => {
    // check if dropDownEffect.current.attributes.name.value is "Shop"
    if (e.target.localName === "label") {
      e.target.nextSibling.style.display = "block";
      setIsOpen(true);
      if (isOpen === true) {
        e.target.nextSibling.style.display = "none";
        setIsOpen(false);
      }
    }
    console.log(e.target.nextSibling);
  };

  return (
    <div className={Style.mainDiv}>
      <div className={Style.footer}>
        <div className={Style.main}>
          <div className={Style.container}>
            <div>
              <ul className={Style.list}>
                {shop.map((list) => (
                  <li key={list.name}>{list.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={Style.container}>
            <div>
              <ul className={Style.list}>
                {explore.map((list) => (
                  <li key={list.name}>{list.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={Style.container}>
            <div>
              <ul className={Style.list}>
                {support.map((list) => (
                  <li key={list.name}>{list.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={Style.container}>
            <div>
              <ul className={Style.list}>
                {company.map((list) => (
                  <li key={list.name}>{list.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={Style.container}>
            <div>
              <ul className={Style.list}>
                <li>Follow Us</li>
                {followUs.map((icon) => (
                  <li key={icon.id} className={Style.icons}>
                    <img
                      src={icon.image}
                      className={Style.icon}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={Style.lastDiv}>
            <p>FOR GAMERS. BY GAMERS.™</p>
          </div>
        </div>
        <div className={Style.sep}></div>
        <div className={Style.footerBottom}>
          <div className={Style.firstTwo}>
            <div className={Style.copyrightDiv}>
              <span className={Style.copyright}>
                Copyright © 2024 Razer Inc. All rights
                reserved.
              </span>
            </div>
            <div className={Style.legalTerm}>
              <ul>
                <li>Site Map</li>
                <li>|</li>
                <li>Legal Terms</li>
                <li>|</li>
                <li>Privacy policy</li>
                <li>|</li>
                <li>Cookie Setting</li>
              </ul>
            </div>
          </div>
          <div className={Style.location}>
            <ul className={Style.changeLocation}>
              <li>United State</li>
              <li>|</li>
              <li>Change Location </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Mobile.MobileFooter}>
        <div className={Mobile.main}>
          <div className={Mobile.Col}>
            <div
              className={Mobile.label}
              onClick={(e) => dropDownHandler(e)}
            >
              <label>
                <span className={Mobile.heading}>Shop</span>
                <span
                  className={Mobile.footer_toggle_icon}
                ></span>
              </label>
              <div
                className={Mobile.dropDownDiv}
                name="Shop"
              >
                <ul>
                  <li>RazerStore</li>
                  <li>RazerCafe</li>
                  <li>Store Locator</li>
                  <li>Purchase Programes</li>
                  <li>Bulk Order Programs</li>
                  <li>Education</li>
                  <li>Only at Razer</li>
                  <li>RazerStore Reward</li>
                  <li>Newsletter</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Mobile.Col}>
            <div
              className={Mobile.label}
              onClick={(e) => dropDownHandler(e)}
            >
              <label>
                <span className={Mobile.heading}>
                  Explore
                </span>
                <span
                  className={Mobile.footer_toggle_icon}
                ></span>
              </label>
              <div
                className={Mobile.dropDownDiv}
                name="Explore"
              >
                <ul>
                  <li>Technology</li>
                  <li>Chroma RGB</li>
                  <li>Concepts</li>
                  <li>Esports</li>
                  <li>Collabs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Mobile.Col}>
            <div
              className={Mobile.label}
              onClick={(e) => dropDownHandler(e)}
            >
              <label>
                <span className={Mobile.heading}>
                  Support
                </span>
                <span
                  className={Mobile.footer_toggle_icon}
                ></span>
              </label>
              <div
                className={Mobile.dropDownDiv}
                name="Support"
              >
                <ul>
                  <li>Get Help</li>
                  <li>Chroma RGB</li>
                  <li>Registration & Warranty</li>
                  <li>RazerStore Support</li>
                  <li>Manage Razer ID</li>
                  <li>Support Videos</li>
                  <li>Recyvling Program</li>
                  <li>Accessibility Statement</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Mobile.Col}>
            <div
              className={Mobile.label}
              onClick={(e) => dropDownHandler(e)}
            >
              <label>
                <span className={Mobile.heading}>
                  Company
                </span>
                <span
                  className={Mobile.footer_toggle_icon}
                ></span>
              </label>
              <div
                className={Mobile.dropDownDiv}
                name="Company"
              >
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Newsroom</li>
                  <li>zVentures</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Mobile.copyright}>
          <span>
            Copyright © 2024 Razer Inc. All rights reserved.
          </span>
          <div className={Mobile.legalTerm}>
            <ul>
              <li>Site Map</li>
              <li>|</li>
              <li>Legal Terms</li>
              <li>|</li>
              <li>Privacy policy</li>
              <li>|</li>
              <li>Cookie Setting</li>
            </ul>
          </div>
        </div>
        <div className={Mobile.location}>
          <ul className={Style.changeLocation}>
            <li>United State</li>
            <li>|</li>
            <li>
              Change Location{" "}
              <span style={{ marginLeft: "5px" }}>
                {">"}
              </span>{" "}
            </li>
          </ul>
        </div>
        <div className={Mobile.lastDiv}>
          <p>FOR GAMERS. BY GAMERS.™</p>
        </div>
        <div className={Mobile.socialMedia}>
          <ul className={Mobile.list}>
            {followUs.map((icon) => (
              <li key={icon.id} className={Mobile.icons}>
                <img
                  src={icon.image}
                  className={Mobile.icon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
