import Link from "next/link";
import style from "./HeaderStyle.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link href={"/shop"} style={{ textDecoration: "none" }}>
          <div className={style.logo}>
            <img src="/Icons/razer-logo.svg" alt="razer logo" />
            <p>Razer ID</p>
          </div>{" "}
        </Link>
        <div className={style.icon}>
          <img src="/Icons/Globe_icon.svg" alt="Global Icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
