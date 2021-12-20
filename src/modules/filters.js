/* поиск */
export const searchFilter = (goods, value) => {
  /* осуществляем перебор массива с товарами */
  return goods.filter((goodsItem) => {
    /* возвращаем элемент массива в том случае, если есть совпадение заголовка с введенным значением в поле поиска */
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};
/* фильтрация по категории */
export const categoryFilter = (goods, value) => {
  /* осуществляем перебор массива с товарами */
  return goods.filter((goodsItem) => {
    /* возвращаем элемент массива в том случае, если есть совпадение свойства категории с выбранной в каталоге категорией */
    return goodsItem.category === value;
  });
};

/* фильтрация по цене */
export const priceFilter = (goods, min, max) => {
  /* осуществляем перебор массива с товарами */
  return goods.filter((goodsItem) => {
    /* если минимальное и максимальное значение цены равняется пустой строке, возвращаем весь массив товаров */
    if (min === "" && max === "") {
      return goodsItem;
    } else if (min !== "" && max !== "") {
      /* если не равен */
      return goodsItem.price > +min && goodsItem.price < +max;
    } else if (min !== "" && max === "") {
      return goodsItem.price > +min;
    } else if (min === "" && max !== "") {
      return goodsItem.price < +max;
    }
  });
};

/* фильтрация акционных товаров */
export const hotSaleFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    /* если выбран чекбокс акция, возвращаем товары с пометкой "распродажа" */
    if (value) {
      return goodsItem.sale === true;
    } else {
      /* если чекбокс не выбран, возвращаем все товары */
      return goodsItem;
    }
  });
};
