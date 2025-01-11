import style from "./headerStyle.module.css";
import { header } from "@/Constants/Const";
import CartDisplay from "./CartDisplay";
import { useCart } from "@/Context/CartProvider";

function Header({ cookies }) {
  const [state, dispatch] = useCart();
  const uiCartItems = state.selectedItems;
  
  return (
    <header className={style.header}>
      <nav className={style.navigator}>
        <ul>
          <li className={style.hamburgerMenu}>
            <img src="/Icons/menu-open.png" alt="" />
          </li>
          <li>
            <img src="/Icons/razer-logo.svg" className={style.logo} />
          </li>
          {header.map((item) => (
            <li key={item.id} className={style.menu}>
              {item.name}
            </li>
          ))}
          <li className={style.search}>
            <img src="/Icons/search.svg" className={style.icons} />
          </li>
          <li className={style.cartSection}>
            <img
              src="/Icons/shopping-cart.svg"
              className={`${style.cart} ${style.icons}`}
            />
            {uiCartItems.length >= 1 ? (
              <span className={style.itemsCounter}>{state.itemsCounter}</span>
            ) : null}
            {uiCartItems.length >= 0 ? (
              <div className={style.cartDisplay}>
                <img
                  className={style.arrowIcon}
                  src="/Icons/boxArrow.png"
                  alt="boxArrow"
                />
                <CartDisplay cookies={cookies} />
              </div>
            ) : null}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
