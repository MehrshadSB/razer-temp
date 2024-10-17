import { useQuery } from "@tanstack/react-query";
import style from "./headerStyle.module.css";
import { header } from "@/Constants/Const";
import api from "@/services/api";
import CartDisplay from "./CartDisplay";

function Header() {
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.get("/order/get-cart/"),
  });


  return (
    <header className={style.header}>
      <nav className={style.navigator}>
        <ul>
          <li className={style.hamburgerMenu}>
            <img src="/Icons/menu-open.png" alt="" />
          </li>
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
          <li className={style.search}>
            <img
              src="/Icons/search.svg"
              className={style.icons}
            />
          </li>
          <li className={style.cartSection}>
            <img
              src="/Icons/shopping-cart.svg"
              className={`${style.cart} ${style.icons}`}
            />
              <div className={style.cartDisplay} style={{display: "block"}}>
                <img
                className={style.arrowIcon}
                  src="/Icons/boxArrow.png"
                  alt="boxArrow"
                />
                <CartDisplay cart={cart} />
              </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
