import api from "@/services/api";

export default function Home() {
  const Anything = [];
  return <></>;
}

export async function getStaticProps() {
  const initialState = await api.get("/order/get-cart/");
  console.log(initialState);
  return {
    props: { initialState },
  };
}
