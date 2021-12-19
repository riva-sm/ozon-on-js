import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";

const catalog = () => {
  /* находим кнопку меню каталога */
  const btnCatalog = document.querySelector(".catalog-button > button");
  /* находим модальное окно каталога */
  const catalogModal = document.querySelector(".catalog");
  /* получаем элементы списка с категориями */
  const catalogModalItems = document.querySelectorAll(".catalog-list li");

  /* переменная открыть */
  let isOpen = false;

  /* по клику на кнопку меню каталога показываем модальное окно каталога */
  btnCatalog.addEventListener("click", () => {
    isOpen = !isOpen;
    /* если переменная открыть существует, открываем одальное окно каталога */
    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }
  });
  /* осуществляем перебор элементов списка с категориями */
  catalogModalItems.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent;
      getData().then((data) => {
        renderGoods(categoryFilter(data, text));
      });
    });
  });
};

export default catalog;
