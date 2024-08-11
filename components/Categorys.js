import api from "@/services/api";
import style from "./categoryStyle.module.css";
import { useQuery } from "@tanstack/react-query";

export async function getStaticProps() {
  const categorys = await api.get(
    "/product/productCategory/"
  );

  return { props: { categorys } };
}

function Categorys(props) {
  const { data: categorys } = useQuery({
    queryKey: ["categorys"],
    queryFn: () => api.get("/product/productCategory/"),
    initialData: props.categorys,
  });


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
