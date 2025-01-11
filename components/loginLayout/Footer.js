import Image from "next/image";
import style from "./FooterStyle.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        <div className={style.topSide}>
          <div className={style.socialIcons}>
            <ul>
              <li>
                  <Image
                    width={30}
                    height={30}
                    src="/Icons/facebook.svg"
                    alt="facebook"
                  />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/instagram.svg"
                  alt="instagram"
                />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/threads.svg"
                  alt="threads"
                />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/twitter.svg"
                  alt="twitter"
                />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/youtube.svg"
                  alt="youtube"
                />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/tiktok.svg"
                  alt="tiktok"
                />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/twitch.svg"
                  alt="twitch"
                />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/discord.svg"
                  alt="discord"
                />
              </li>
              <li>
                <Image
                  width={30}
                  height={30}
                  src="/Icons/insider.svg"
                  alt="insider"
                />
              </li>
            </ul>
          </div>
          <div className={style.textSection}>
            <span>FOR GAMERS. BY GAMERS.</span>
          </div>
        </div>
        <div className={style.bottomSide}>
          <span>Copyright © 2024 Razer Inc. All rights reserved.</span>
          <ul>
            <li>FAQ</li>
            <li>|</li>
            <li>Legal Terms</li>
            <li>|</li>
            <li>Privacy Policy</li>
            <li>|</li>
            <li>Cookie Setting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
