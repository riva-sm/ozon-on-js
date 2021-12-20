import renderCart from "./renderCart";
import postData from "./postData";
/* объявляем функцию корзина */

const cart = () => {
  /* находим нужные нам элементы корзины и записываем их в переменные */
  const cartBtn = document.getElementById("cart"); // кнопка корзины
  const cartModal = document.querySelector(".cart"); //модальное окно
  const cartCloseBtn = cartModal.querySelector(".cart-close"); //крестик или кнопка закрытия модального окна
  /* находим контейнер с карточками товаров */
  const goodsWrapper = document.querySelector(".goods");
  /* находим вывод общей цены в корзине */
  const cartTotal = document.querySelector(".cart-total > span");
  const cartWrapper = document.querySelector(".cart-wrapper");
  /* кнопка оформить заказ */
  const cartSendBtn = document.querySelector(".cart-confirm");

  /* функция открытия корзины */
  const openCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cartModal.style.display = "flex";
    /* рендерим весь массив товаров в корзине */
    renderCart(cart);
    /* осуществляем подсчет общей стоимости добавленных в корзину товаров */
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  };
  /* функция закрытия корзины */
  const closeCart = () => {
    cartModal.style.display = "";
  };

  /* отлавливаем событие клик по кнопке корзины и вызываем функцию открытия корзины */
  cartBtn.addEventListener("click", openCart);
  /* отлавливаем событие клик по кнопке крестик  и вызываем функцию закрытия корзины */
  cartCloseBtn.addEventListener("click", closeCart);

  goodsWrapper.addEventListener("click", (event) => {
    /* по клику на кнопку "в корзину"  определяем, на какую карточку товара был клик */
    if (event.target.classList.contains("btn-primary")) {
      const card = event.target.closest(".card");
      /* определяем id карточки */
      const key = card.dataset.key;
      /* получаем массив карточек товаров из Local Storage */
      const goods = JSON.parse(localStorage.getItem("goods"));
      /* есть ли определенный ключ в Local Storage, тогда заносим его объект в Local Storage, иначе пустой массив (пустая корзина) */
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      /* ищем в Local Storage совпадение с нашим массивом ключ-id*/
      const goodItem = goods.find((item) => {
        return item.id === +key;
      });
      /* добавляем в корзину массив (выбранные товары) */
      cart.push(goodItem);
      /* Отправляем добавленные в корзину товары в Local Storage */
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });

  /* удаляем товары из корзины */
  cartWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const card = event.target.closest(".card");
      /* определяем id карточки */
      const key = card.dataset.key;

      const index = cart.findIndex((item) => {
        /* сравниваем id с индексом элемента */
        return item.id === +key;
      });

      /* удаляем элементы из массива (удаляем товары из корзины) */
      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      /* после удаления пересобираем оставшиеся товары и подсчитываем их стоимость */
      renderCart(cart);
      /* осуществляем подсчет общей стоимости добавленных в корзину товаров */
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
    }
  });

  cartSendBtn.addEventListener("click", () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    postData(cart).then(() => {
      localStorage.removeItem("cart");
      renderCart([]);

      cartTotal.textContent = 0;
    });
  });
};

// console.dir(cartBtn);

export default cart;
