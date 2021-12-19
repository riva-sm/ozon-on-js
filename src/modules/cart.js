/* объявляем функцию корзина */

const cart = () => {
  /* находим нужные нам элементы корзины и записываем их в переменные */
  const cartBtn = document.getElementById("cart"); // кнопка корзины
  const cartModal = document.querySelector(".cart"); //модальное окно
  const cartCloseBtn = cartModal.querySelector(".cart-close"); //крестик или кнопка закрытия модального окна

  /* функция открытия корзины */
  const openCart = () => {
    cartModal.style.display = "flex";
  };
  /* функция закрытия корзины */
  const closeCart = () => {
    cartModal.style.display = "";
  };

  /* отлавливаем событие клик по кнопке корзины и вызываем функцию открытия корзины */
  cartBtn.addEventListener("click", openCart);
  /* отлавливаем событие клик по кнопке крестик  и вызываем функцию закрытия корзины */
  cartCloseBtn.addEventListener("click", closeCart);
};

// console.dir(cartBtn);

export default cart;
