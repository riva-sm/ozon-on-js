export const searchFilter = (goods, value) => {
  /* осуществляем перебор массива с товарами */
  return goods.filter((goodsItem) => {
    /* возвращаем элемент массива в том случае, если есть совпадение заголовка с введенным значением в поле поиска */
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  /* осуществляем перебор массива с товарами */
  return goods.filter((goodsItem) => {
    /* возвращаем элемент массива в том случае, если есть совпадение свойства категории с выбранной в каталоге категорией */
    return goodsItem.category === value;
  });
};
