import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
  /* обращаемся к функции получения данных и рендерим карточки товаров */
  getData().then((data) => {
    renderGoods(data);
  });
};

export default load;
