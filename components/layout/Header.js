import style from "./headerStyle.module.css";
import { header } from "@/Constants/Const";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navigator}>
        <ul>
          <li className={style.hamburgerMenu}></li>
          <li>
            <img
              src="/Icons/razer-logo.svg"
              className={style.logo}
            />
          </li>
          {header.map((item) => (
            <li key={item.id} className={style.menu}>
              {item.name}
            </li>
          ))}
          <li>
            <img
              src="/Icons/search.svg"
              className={`${style.search} ${style.icons}`}
            />
          </li>
          <li>
            <img
              src="/Icons/shopping-cart.svg"
              className={`${style.cart} ${style.icons}`}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
