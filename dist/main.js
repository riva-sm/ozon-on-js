/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n/* объявляем функцию корзина */\r\n\r\nconst cart = () => {\r\n  /* находим нужные нам элементы корзины и записываем их в переменные */\r\n  const cartBtn = document.getElementById(\"cart\"); // кнопка корзины\r\n  const cartModal = document.querySelector(\".cart\"); //модальное окно\r\n  const cartCloseBtn = cartModal.querySelector(\".cart-close\"); //крестик или кнопка закрытия модального окна\r\n  /* находим контейнер с карточками товаров */\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  /* находим вывод общей цены в корзине */\r\n  const cartTotal = document.querySelector(\".cart-total > span\");\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n  /* кнопка оформить заказ */\r\n  const cartSendBtn = document.querySelector(\".cart-confirm\");\r\n\r\n  /* функция открытия корзины */\r\n  const openCart = () => {\r\n    const cart = localStorage.getItem(\"cart\")\r\n      ? JSON.parse(localStorage.getItem(\"cart\"))\r\n      : [];\r\n\r\n    cartModal.style.display = \"flex\";\r\n    /* рендерим весь массив товаров в корзине */\r\n    (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n    /* осуществляем подсчет общей стоимости добавленных в корзину товаров */\r\n    cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price;\r\n    }, 0);\r\n  };\r\n  /* функция закрытия корзины */\r\n  const closeCart = () => {\r\n    cartModal.style.display = \"\";\r\n  };\r\n\r\n  /* отлавливаем событие клик по кнопке корзины и вызываем функцию открытия корзины */\r\n  cartBtn.addEventListener(\"click\", openCart);\r\n  /* отлавливаем событие клик по кнопке крестик  и вызываем функцию закрытия корзины */\r\n  cartCloseBtn.addEventListener(\"click\", closeCart);\r\n\r\n  goodsWrapper.addEventListener(\"click\", (event) => {\r\n    /* по клику на кнопку \"в корзину\"  определяем, на какую карточку товара был клик */\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const card = event.target.closest(\".card\");\r\n      /* определяем id карточки */\r\n      const key = card.dataset.key;\r\n      /* получаем массив карточек товаров из Local Storage */\r\n      const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n      /* есть ли определенный ключ в Local Storage, тогда заносим его объект в Local Storage, иначе пустой массив (пустая корзина) */\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n\r\n      /* ищем в Local Storage совпадение с нашим массивом ключ-id*/\r\n      const goodItem = goods.find((item) => {\r\n        return item.id === +key;\r\n      });\r\n      /* добавляем в корзину массив (выбранные товары) */\r\n      cart.push(goodItem);\r\n      /* Отправляем добавленные в корзину товары в Local Storage */\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n    }\r\n  });\r\n\r\n  /* удаляем товары из корзины */\r\n  cartWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n      const card = event.target.closest(\".card\");\r\n      /* определяем id карточки */\r\n      const key = card.dataset.key;\r\n\r\n      const index = cart.findIndex((item) => {\r\n        /* сравниваем id с индексом элемента */\r\n        return item.id === +key;\r\n      });\r\n\r\n      /* удаляем элементы из массива (удаляем товары из корзины) */\r\n      cart.splice(index, 1);\r\n\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n\r\n      /* после удаления пересобираем оставшиеся товары и подсчитываем их стоимость */\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n      /* осуществляем подсчет общей стоимости добавленных в корзину товаров */\r\n      cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price;\r\n      }, 0);\r\n    }\r\n  });\r\n\r\n  cartSendBtn.addEventListener(\"click\", () => {\r\n    const cart = localStorage.getItem(\"cart\")\r\n      ? JSON.parse(localStorage.getItem(\"cart\"))\r\n      : [];\r\n\r\n    (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n      localStorage.removeItem(\"cart\");\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n\r\n      cartTotal.textContent = 0;\r\n    });\r\n  });\r\n};\r\n\r\n// console.dir(cartBtn);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  /* находим кнопку меню каталога */\r\n  const btnCatalog = document.querySelector(\".catalog-button > button\");\r\n  /* находим модальное окно каталога */\r\n  const catalogModal = document.querySelector(\".catalog\");\r\n  /* получаем элементы списка с категориями */\r\n  const catalogModalItems = document.querySelectorAll(\".catalog-list li\");\r\n\r\n  /* переменная открыть */\r\n  let isOpen = false;\r\n\r\n  /* по клику на кнопку меню каталога показываем модальное окно каталога */\r\n  btnCatalog.addEventListener(\"click\", () => {\r\n    isOpen = !isOpen;\r\n    /* если переменная открыть существует, открываем одальное окно каталога */\r\n    if (isOpen) {\r\n      catalogModal.style.display = \"block\";\r\n    } else {\r\n      catalogModal.style.display = \"\";\r\n    }\r\n  });\r\n  /* осуществляем перебор элементов списка с категориями */\r\n  catalogModalItems.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      const text = item.textContent;\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n/* фильтрация по цене */\r\nconst filter = () => {\r\n  /* минимальное - максимальное значение инпут */\r\n  const minInput = document.getElementById(\"min\");\r\n  const maxInput = document.getElementById(\"max\");\r\n  /* чекбокс акция */\r\n  const checkboxInput = document.getElementById(\"discount-checkbox\");\r\n  const checkboxSpan = document.querySelector(\".filter-check_checkmark\");\r\n\r\n  minInput.addEventListener(\"input\", () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      );\r\n    });\r\n  });\r\n\r\n  maxInput.addEventListener(\"input\", () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      );\r\n    });\r\n  });\r\n\r\n  /* выбран чекбокс */\r\n  checkboxInput.addEventListener(\"change\", () => {\r\n    if (checkboxInput.checked) {\r\n      checkboxSpan.classList.add(\"checked\");\r\n    } else {\r\n      checkboxSpan.classList.remove(\"checked\");\r\n    }\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      );\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\n/* поиск */\r\nconst searchFilter = (goods, value) => {\r\n  /* осуществляем перебор массива с товарами */\r\n  return goods.filter((goodsItem) => {\r\n    /* возвращаем элемент массива в том случае, если есть совпадение заголовка с введенным значением в поле поиска */\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n  });\r\n};\r\n/* фильтрация по категории */\r\nconst categoryFilter = (goods, value) => {\r\n  /* осуществляем перебор массива с товарами */\r\n  return goods.filter((goodsItem) => {\r\n    /* возвращаем элемент массива в том случае, если есть совпадение свойства категории с выбранной в каталоге категорией */\r\n    return goodsItem.category === value;\r\n  });\r\n};\r\n\r\n/* фильтрация по цене */\r\nconst priceFilter = (goods, min, max) => {\r\n  /* осуществляем перебор массива с товарами */\r\n  return goods.filter((goodsItem) => {\r\n    /* если минимальное и максимальное значение цены равняется пустой строке, возвращаем весь массив товаров */\r\n    if (min === \"\" && max === \"\") {\r\n      return goodsItem;\r\n    } else if (min !== \"\" && max !== \"\") {\r\n      /* если не равен */\r\n      return goodsItem.price > +min && goodsItem.price < +max;\r\n    } else if (min !== \"\" && max === \"\") {\r\n      return goodsItem.price > +min;\r\n    } else if (min === \"\" && max !== \"\") {\r\n      return goodsItem.price < +max;\r\n    }\r\n  });\r\n};\r\n\r\n/* фильтрация акционных товаров */\r\nconst hotSaleFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    /* если выбран чекбокс акция, возвращаем товары с пометкой \"распродажа\" */\r\n    if (value) {\r\n      return goodsItem.sale === true;\r\n    } else {\r\n      /* если чекбокс не выбран, возвращаем все товары */\r\n      return goodsItem;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* делаем заброс к firebase и получаем с него ответ сервера в виде response */\r\n/* осуществляем проверку по строке и если есть совпадения, выводим подходящие товары */\r\nconst getData = (str) => {\r\n  return fetch(\r\n    `https://ozon-test-695f9-default-rtdb.firebaseio.com/goods.json?${\r\n      str ? `search=${str}` : \"\"\r\n    }`\r\n  ).then((response) => {\r\n    return response.json();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n  /* обращаемся к функции получения данных и рендерим карточки товаров */\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* обращаемся к серверу и отправляем в него запрос, получаем ответ\r\nпри каждом обращении в json будет добавляться новый объект\r\n*/\r\n\r\nconst postData = (cart) => {\r\n  return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify(cart),\r\n    headers: {\r\n      \"Content-type\": \"application/json; charset=UTF-8\",\r\n    },\r\n  }).then((res) => res.json());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n\r\n  /* Очищаем весь контейнер товаров в корзине */\r\n  cartWrapper.innerHTML = \"\";\r\n\r\n  if (goods.length === 0) {\r\n    cartWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n        <div id=\"cart-empty\">\r\n\t\t\t\t\tВаша корзина пока пуста\r\n\t\t\t\t</div>`\r\n    );\r\n  } else {\r\n    /* осуществляем перебор массива товаров и выводим карточки товаров в корзине*/\r\n    goods.forEach((goodsItem) => {\r\n      cartWrapper.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        `\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\" style=\"background-image: url('${\r\n                goodsItem.img\r\n              }')\"></span>\r\n            </div>\r\n          <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n              <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n              <button class=\"btn btn-primary\">Удалить</button>\r\n            </div>\r\n          </div>\r\n    \r\n    `\r\n      );\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n\r\n  /* сохраняем данные в Local Storage после преобразования массива в строку */\r\n  localStorage.setItem(\"goods\", JSON.stringify(goods));\r\n\r\n  /* Очищаем весь контейнер товаров на странице */\r\n  goodsWrapper.innerHTML = \"\";\r\n\r\n  /* осуществляем перебор массива товаров и выводим карточки товаров */\r\n  goods.forEach((goodsItem) => {\r\n    goodsWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\" style=\"background-image: url('${\r\n                goodsItem.img\r\n              }')\"></span>\r\n            </div>\r\n          <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n              <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n              <button class=\"btn btn-primary\">В корзину</button>\r\n            </div>\r\n          </div>\r\n\t\t\t\t</div>\r\n    \r\n    `\r\n    );\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  /* находим поле поиска */\r\n  const searchInput = document.querySelector(\".search-wrapper_input\");\r\n\r\n  searchInput.addEventListener(\"input\", (event) => {\r\n    const value = event.target.value;\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;