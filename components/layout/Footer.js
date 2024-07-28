import React from "react";
import Style from "./footerStyle.module.css";
import {
  shop,
  explore,
  support,
  company,
  followUs,
} from "@/Constants/Const";

function Footer() {
  return (
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
        <div>
          <span className={Style.copyright}>
            Copyright © 2024 Razer Inc. All rights reserved.
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
        <div className={Style.location}>
          <ul className={Style.changeLocation}>
            <li>United State</li>
            <li>|</li>
            <li>Change Location </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
