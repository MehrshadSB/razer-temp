import Image from "next/image";
import style from "./FooterStyle.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.topSide}>
        <div className={style.socialIcons}>
          <ul>
            <li><Image width={28} height={28} src="/Icons/facebook.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/instagram.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/threads.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/twitter.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/youtube.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/tiktok.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/twitch.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/discord.svg" /></li>
            <li><Image width={28} height={28} src="/Icons/insider.svg" /></li>
          </ul>
        </div>
        <div className={style.textSection}>
          <span></span>
        </div>
      </div>
      <div className={style.bottomSide}></div>
    </div>
  );
}

export default Footer;
