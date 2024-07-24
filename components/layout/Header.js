import style from "./headerStyle.module.css";
function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navigator}>
        <ul>
          <li>
            <img
              src="/Icons/razer-logo.svg"
              className={style.logo}
            />
          </li>
          <li className={style.menu}>Shop</li>
          <li className={style.menu}>PC</li>
          <li className={style.menu}>Console</li>
          <li className={style.menu}>Mobile</li>
          <li className={style.menu}>Lifestyle</li>
          <li className={style.menu}>Gold</li>
          <li className={style.menu}>Community</li>
          <li className={style.menu}>Support</li>
          <li>
            <img src="/Icons/search.svg"  className={`${style.search} ${style.icons}`}/>
          </li>
          <li>
            <img src="/Icons/shopping-cart.svg"  className={`${style.search} ${style.icons}`}/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
