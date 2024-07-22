import style from "./headerStyle.module.css";
function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navigator}>
        <ul>
          <li>
            <img src="/Icons/razer-logo.svg"  className={style.icon}/>
          </li>
          <li className={style.menu}>Shop</li>
          <li className={style.menu}>PC</li>
          <li className={style.menu}>Console</li>
          <li className={style.menu}>Mobile</li>
          <li className={style.menu}>Lifestyle</li>
          <li className={style.menu}>Gold</li>
          <li className={style.menu}>Community</li>
          <li className={style.menu}>Support</li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
