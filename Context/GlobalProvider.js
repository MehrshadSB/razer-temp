import CartProvider from "./CartProvider";

function GlobalProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}

export default GlobalProvider;
