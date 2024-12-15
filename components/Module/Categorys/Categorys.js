import { useEffect, useState } from "react";
import style from "./categoryStyle.module.css";
import api from "@/services/api";

function Categorys() {
  const [categorys, setCategorys] = useState();

  useEffect(() => {
    const fetchCategorys = async () => {
      const categorys = await api("/product/productCategory/");
      setCategorys(categorys);
    };
    fetchCategorys();
  }, []);

  return (
    <div className={style.container}>
      <ul>
        {categorys?.map((category) => (
          <li key={category.id + 12}>
            <img src={category.image} />
            <p>{category.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorys;
