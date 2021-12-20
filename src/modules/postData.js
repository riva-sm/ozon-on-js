/* обращаемся к серверу и отправляем в него запрос, получаем ответ
при каждом обращении в json будет добавляться новый объект
*/

const postData = (cart) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export default postData;
