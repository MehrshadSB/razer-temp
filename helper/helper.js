import api from "@/services/api";

const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0,
  );
  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { total, itemsCounter };
};

const signOutHandler = async () => {
  await api("http://localhost:3000/api/logout");
};

export { sumProducts, signOutHandler };
