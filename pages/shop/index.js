import Categorys from "@/components/Categorys";
import Layout from "@/components/layout/Layout";
import Store from "@/components/Store";
import api from "@/services/api";
import React from "react";

function index({ products }) {
  return (
    <Layout>
      <Categorys />
      <Store products={products} />
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
