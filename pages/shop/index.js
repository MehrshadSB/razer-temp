import Shop from "@/components/Template/Shop";
import api from "@/services/api";

function index({ products, cookies }) {
  return <Shop products={products} cookies={cookies}/>;
}

export const getServerSideProps = async (context) => {
  const products = await api.get("/product/list/");
  const { cookies } = context.req;
  const props = {
    products,
    cookies: {},
  };
  if (cookies?.accessToken || cookies?.refreshToken) {
    props.cookies.accessToken = cookies.accessToken;
    props.cookies.refreshToken = cookies.refreshToken;
  }

  return {
    props,
  };
};

export default index;
