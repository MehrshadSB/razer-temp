import style from "@/components/layout/cartDisplay.module.css";

function CartDisplay({
  cart,
}) {
  const uiCartItems =
    cart?.items.slice(
      0,
      3
    );
  console.log(
    cart
  );
  return (
    <div
      className={
        style.mainContainer
      }
    >
      <ul
        className={
          style.orderSection
        }
      >
        {uiCartItems ? (
          uiCartItems.map(
            (
              item
            ) => (
              <li
                key={
                  item.id
                }
              >
                <img
                  src={
                    item
                      .product
                      .image_url
                  }
                  alt=""
                />
                <span>
                  {
                    item
                      .product
                      .name
                  }
                </span>
              </li>
            )
          )
        ) : (
          <li>
            Loading...
          </li>
        )}
        <li>
          {cart
            ?.items
            .length >
          3 ? (
            <h5>
              <span>
                {cart
                  ?.items
                  .length -
                  uiCartItems.length +
                  " more items in your cart"}
              </span>
            </h5>
          ) : null}
        </li>
      </ul>
      <button className={style.checkOutBtn}>Check out</button>
      <ul
        className={
          style.actionBtn
        }
      >
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 19.99 16"
          >
            <defs>
              <style></style>
            </defs>
            <g
              id="Layer_2"
              data-name="Layer 2"
            >
              <g
                id="Layer_1-2"
                data-name="Layer 1"
              >
                <g
                  id="Cart_icon"
                  data-name="Cart icon"
                >
                  <path
                    id="Path_22"
                    data-name="Path 22"
                    class="cls-1"
                    d="M17.38,11H6a.41.41,0,0,1-.4-.32L3.49.83H0V0H3.82a.41.41,0,0,1,.41.32l2.15,9.85H17.06l2-7.7H6.25V1.65H19.58a.43.43,0,0,1,.4.52l-2.2,8.52A.42.42,0,0,1,17.38,11Z"
                  />
                  <circle
                    id="Ellipse_22"
                    data-name="Ellipse 22"
                    class="cls-1"
                    cx="9"
                    cy="14"
                    r="2"
                  />
                  <circle
                    id="Ellipse_23"
                    data-name="Ellipse 23"
                    class="cls-1"
                    cx="15"
                    cy="14"
                    r="2"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span>
            Cart
            (
            {
              cart
                ?.items
                .length
            }

            )
          </span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 19 19"
          >
            <defs></defs>
            <g
              id="Layer_2"
              data-name="Layer 2"
            >
              <g
                id="Layer_1-2"
                data-name="Layer 1"
              >
                <path
                  id="Orders_icon"
                  data-name="Orders icon"
                  class="cls-1"
                  d="M16.81,19H2.19A2.19,2.19,0,0,1,0,16.81V7.88H19v8.93A2.19,2.19,0,0,1,16.81,19ZM1,8.88v7.93A1.19,1.19,0,0,0,2.19,18H16.81A1.19,1.19,0,0,0,18,16.81V8.88ZM19,7.75H9.56V0H15a2.18,2.18,0,0,1,2.07,1.5L18.9,6.87c0,.11,0,.23.05.34Zm-8.43-1H17.8L16.16,1.81A1.18,1.18,0,0,0,15,1H10.56Zm-1.12,1H0l0-.54A2,2,0,0,1,.1,6.87L1.89,1.49A2.18,2.18,0,0,1,4,0H9.44Zm-8.25-1H8.44V1H4a1.18,1.18,0,0,0-1.12.81Z"
                />
              </g>
            </g>
          </svg>
          <span>
            Order
          </span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            fill="#555"
            viewBox="0 0 19 18.505"
          >
            <g
              id="account_icon_default"
              data-name="account icon default"
              transform="translate(0.5 0.5)"
            >
              <g
                id="clickable_area"
                data-name="clickable area"
                transform="translate(0 0.005)"
                stroke="#707070"
                stroke-width="1"
                opacity="0"
              >
                <rect
                  width="18"
                  height="18"
                  stroke="none"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="17"
                  fill="none"
                />
              </g>
              <path
                id="Path_31"
                data-name="Path 31"
                d="M24,28.5v-2a4.272,4.272,0,0,0-4.5-4h-9a4.272,4.272,0,0,0-4.5,4v2"
                transform="translate(-6 -11.5)"
                fill="none"
                stroke="#eee"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <path
                id="Path_32"
                data-name="Path 32"
                d="M21,9a4.5,4.5,0,1,1-4.5-4.5A4.5,4.5,0,0,1,21,9Z"
                transform="translate(-7.5 -4.5)"
                fill="none"
                stroke="#eee"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </g>
          </svg>
          <span>
            Account
          </span>
        </li>
        <li>
          <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.835 9.233l-4.371-8.358c-0.255-0.487-0.915-0.886-1.464-0.886h-10.060c-0.011-0.001-0.022-0.003-0.033-0.004-0.009 0-0.018 0.003-0.027 0.004h-9.88c-0.55 0-1.211 0.398-1.47 0.883l-4.359 8.197c-0.259 0.486-0.207 1.248 0.113 1.696l15.001 20.911c0.161 0.224 0.375 0.338 0.588 0.338 0.212 0 0.424-0.11 0.587-0.331l15.247-20.758c0.325-0.444 0.383-1.204 0.128-1.691zM29.449 8.988h-5.358l2.146-6.144zM17.979 1.99h6.436l-1.997 5.716zM20.882 8.988h-9.301l4.396-6.316zM9.809 8.034l-2.006-6.044h6.213zM21.273 10.988l-5.376 15.392-5.108-15.392h10.484zM13.654 25.971l-10.748-14.983h5.776zM23.392 10.988h5.787l-11.030 15.018zM5.89 2.575l2.128 6.413h-5.539z"></path>
          </svg>
          <span>
            RazerStore
            Rewards
          </span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 17"
          >
            <defs>
              <style></style>
            </defs>
            <g
              id="Layer_2"
              data-name="Layer 2"
            >
              <g
                id="Layer_1-2"
                data-name="Layer 1"
              >
                <path
                  id="Sign_in_icon"
                  data-name="Sign in icon"
                  class="cls-1"
                  d="M7.5,0V2.43h10V14.57H7.5V17H20V0ZM10,4.86V7.29H0V9.71H10v2.43L15,8.5Z"
                />
              </g>
            </g>
          </svg>
          <span>
            Log in
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CartDisplay;
