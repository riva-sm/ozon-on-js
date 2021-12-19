/* делаем заброс к firebase и получаем с него ответ сервера в виде response */
/* осуществляем проверку по строке и если есть совпадения, выводим подходящие товары */
const getData = (str) => {
  return fetch(
    `https://ozon-test-695f9-default-rtdb.firebaseio.com/goods.json?${
      str ? `search=${str}` : ""
    }`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
