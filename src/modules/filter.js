import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

/* фильтрация по цене */
const filter = () => {
  /* минимальное - максимальное значение инпут */
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  /* чекбокс акция */
  const checkboxInput = document.getElementById("discount-checkbox");
  const checkboxSpan = document.querySelector(".filter-check_checkmark");

  minInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  maxInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  /* выбран чекбокс */
  checkboxInput.addEventListener("change", () => {
    if (checkboxInput.checked) {
      checkboxSpan.classList.add("checked");
    } else {
      checkboxSpan.classList.remove("checked");
    }

    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });
};

export default filter;
