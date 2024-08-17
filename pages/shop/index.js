import Categorys from "@/components/Categorys";
import Layout from "@/components/layout/Layout";
import MultiPanel from "@/components/MultiPanel";
import Slider from "@/components/Slider";
import Store from "@/components/Store";
import TileSlider from "@/components/TileSlider";
import api from "@/services/api";
import { useState } from "react";
import { v4 } from "uuid";

function index({ products }) {
  const freshOffTheLine = products.filter((product) =>
    product.tags.includes("FRESH OFF THE LINE")
  );

  const bestSellers = products.filter((product) =>
    product.tags.includes("BEST SELLERS")
  );

  const onlyAtRazer = products.filter((product) =>
    product.tags.includes("ONLY AT RAZER")
  );

  const finalRoundGear = products.filter((product) =>
    product.tags.includes("FINAL ROUND GEAR")
  );

  return (
    <Layout>
      <Categorys />
      <Store
        products={freshOffTheLine}
        title={"FRESH OFF THE LINE"}
        details={
          "Check out our latest releases to secure the most up-to-date upgrades for your setup"
        }
      />
      <Store
        products={bestSellers}
        title={"BEST SELLERS"}
        details={
          "Join the hype train with the hottest products in our arsenal"
        }
      />
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
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const products = await api.get("/product/list/");

  return {
    props: { products },
  };
};

export default index;
