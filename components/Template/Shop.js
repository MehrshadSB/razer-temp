import Categorys from "@/components/Module/Categorys/Categorys";
import Layout from "@/components/layout/Layout";
import MultiPanel from "@/components/Module/MultiPanel/MultiPanel";
import Slider from "@/components/Module/Slider/Slider";
import Store from "@/components/Module/Store/Store";
import style from "@/styles/shopStyle.module.css";
import TileSlider from "../Module/TileSlider/TileSlider";

function Shop({ products, cookies, cart }) {
  const freshOffTheLine = products.filter((product) =>
    product.tags.includes("FRESH OFF THE LINE"),
  );

  const bestSellers = products.filter((product) =>
    product.tags.includes("BEST SELLERS"),
  );

  const onlyAtRazer = products.filter((product) =>
    product.tags.includes("ONLY AT RAZER"),
  );

  const finalRoundGear = products.filter((product) =>
    product.tags.includes("FINAL ROUND GEAR"),
  );

  return (
    <Layout cookies={cookies} cart={cart}>
      <div className={style.mainContainer}>
        <Categorys />
        <Store
          products={freshOffTheLine}
          title={"FRESH OFF THE LINE"}
          details={
            "Check out our latest releases to secure the most up-to-date upgrades for your setup"
          }
        />
        {bestSellers >= 1 ? (
          <Store
            products={bestSellers}
            title={"BEST SELLERS"}
            details={
              "Join the hype train with the hottest products in our arsenal"
            }
          />
        ) : null}
        <Slider />
        <Store
          products={onlyAtRazer}
          title={"ONLY AT RAZER"}
          details={
            "Explore unique products and services only available at our official online store"
          }
        />
        <TileSlider />
        <Store
          products={finalRoundGear}
          title={"FINAL ROUND GEAR"}
          details={
            "Get your upgrades from our last-chance selection of hardware"
          }
        />
        <MultiPanel />
      </div>
    </Layout>
  );
}

export default Shop;
