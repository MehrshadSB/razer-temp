import Shop from "@/PageModules/Shop";
import api from "@/services/api";

function index({ products }) {
  return <Shop products={products}/>   
}

export const getServerSideProps = async () => {
  const products = await api.get("/product/list/");
  
  return {
    props: {
      products,
    },
  };
};

export default index;
