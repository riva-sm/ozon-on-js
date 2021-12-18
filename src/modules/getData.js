const getData = () => {
  return fetch(
    "https://ozon-test-695f9-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
