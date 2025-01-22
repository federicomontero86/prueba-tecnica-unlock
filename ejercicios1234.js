/* Ejercicio 1: Cálculo del precio final con descuentos
Descripción: Crea una función en JavaScript que tome como parámetros el precio de un producto, un porcentaje de descuento y calcule el precio final después de aplicar el descuento.
Requerimientos:
La función debe tomar dos argumentos: el precio del producto y el descuento.
Debe devolver el precio final con el descuento aplicado.
Considera validaciones. */

function calculateFinalPrice(price, discount) {
  // Price and discount must be positive numbers and discount <= 100
  if (
    typeof price !== "number" ||
    typeof discount !== "number" ||
    price < 0 ||
    discount < 0 ||
    discount > 100
  ) {
    // Showing the error in console
    const errorMessage =
      "Parámetros inválidos. Asegúrate de que el precio y el descuento sean números positivos y el descuento no sea mayor a 100.";
    console.error(errorMessage);
    return errorMessage;
  }

  // Calculating finalPrice
  const discountAplied = (discount * price) / 100;
  const finalPrice = Number((price - discountAplied).toFixed(2));
  return finalPrice;
}

// Test case 1 - Happy path
let productPrice = 100;
let discountPercentage = 20;
console.log(`Ejercicio 1 - Test case 1 - Happy path`);
console.log(`Input: price = ${productPrice}, discount = ${discountPercentage}`);
let priceWithDiscount = calculateFinalPrice(productPrice, discountPercentage);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("----------------------------------------------------------------");

// Test case 2 - Passing only the first argument
productPrice = 200;
console.log(`Ejercicio 1 - Test case 2 - Passing only the first argument`);
console.log(`Input: price = ${productPrice}`);
priceWithDiscount = calculateFinalPrice(productPrice);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("----------------------------------------------------------------");

// Test case 3 - Passing only the second argument
discountPercentage = 10;
console.log(`Ejercicio 1 - Test case 3 - Passing only the second argument`);
console.log(`Input: discount = ${discountPercentage}`);
priceWithDiscount = calculateFinalPrice(undefined, discountPercentage);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("----------------------------------------------------------------");

// Test case 4 - Price and discount must be positive numbers and discount <= 100
productPrice = "hola";
discountPercentage = 15;
console.log(`Ejercicio 1 - Test case 4 - price must be a number`);
console.log(`Input: price = ${productPrice}, discount = ${discountPercentage}`);
priceWithDiscount = calculateFinalPrice(productPrice, discountPercentage);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("*****************");

productPrice = 500;
discountPercentage = "hola";
console.log(`Ejercicio 1 - Test case 4 - discount must be a number`);
console.log(`Input: price = ${productPrice}, discount = ${discountPercentage}`);
priceWithDiscount = calculateFinalPrice(productPrice, discountPercentage);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("*****************");

productPrice = -500;
discountPercentage = 15;
console.log(`Ejercicio 1 - Test case 4 - price must be a positive number`);
console.log(`Input: price = ${productPrice}, discount = ${discountPercentage}`);
priceWithDiscount = calculateFinalPrice(productPrice, discountPercentage);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("*****************");

productPrice = 500;
discountPercentage = -15;
console.log(`Ejercicio 1 - Test case 4 - discount must be a positive number`);
console.log(`Input: price = ${productPrice}, discount = ${discountPercentage}`);
priceWithDiscount = calculateFinalPrice(productPrice, discountPercentage);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("*****************");

productPrice = 500;
discountPercentage = 120;
console.log(`Ejercicio 1 - Test case 4 - discount must be <= 100`);
console.log(`Input: price = ${productPrice}, discount = ${discountPercentage}`);
priceWithDiscount = calculateFinalPrice(productPrice, discountPercentage);
console.log(`Output: priceWithDiscount = ${priceWithDiscount}`);
console.log("*****************");

console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");

/* Ejercicio 2: Validación de carrito de compras
Descripción: Crea una función que reciba un carrito de compras (array de objetos) y valide que todos los productos en el carrito tienen stock disponible. Si todos los productos están en stock, la función debe devolver true, de lo contrario false.
Requerimientos:
Cada producto en el carrito es un objeto con las propiedades nombre, cantidad y stockDisponible.
Si la cantidad solicitada de un producto excede el stock disponible, se debe devolver false. */

function validateCartStock(cart) {
  // Checking if the cart is an array
  if (!Array.isArray(cart)) {
    const errorMessageCart = "El carrito debe ser un array.";
    console.error(errorMessageCart);
    return errorMessageCart;
  }

  for (let item of cart) {
    // Checking if each item is an object
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      const errorMessageCartStructure = `Estructura inválida del carrito. Asegurate de que cada item del carrito se una objeto.
      `;
      console.error(errorMessageCartStructure);
      return errorMessageCartStructure;
    }

    // Checking if each item contains the required properties
    if (item.name === undefined || !item.quantity || !item.availableStock) {
      const errorMessageItemProperties = `Estructura inválida para el item id: ${item.id}. Asegurate de que cada item del carrito sea un objeto que contenga las propiedades name, quantity y availableStock.
      `;
      console.error(errorMessageItemProperties);
      return errorMessageItemProperties;
    }

    // Quantity validation
    if (typeof item.quantity !== "number" || item.quantity <= 0) {
      const errorMessageQuantity = `Cantidad inválida para el producto: ${item.id}`;
      console.error(errorMessageQuantity);
      return errorMessageQuantity;
    }

    // Available stock validation
    if (typeof item.availableStock !== "number" || item.availableStock < 0) {
      const errorMessageAvailableStock = `Stock disponible inválido para el producto: ${item.id}`;
      console.error(errorMessageAvailableStock);
      return errorMessageAvailableStock;
    }

    // Name validation
    if (
      typeof item.name !== "string" ||
      item.name.length > 500 ||
      item.name === ""
    ) {
      const errorMessageName = `Nombre inválido para el producto: ${item.id}`;
      console.error(errorMessageName);
      return errorMessageName;
    }

    // Checking all product's quantities in the cart
    if (item.quantity > item.availableStock) {
      return false; // If the requested quantity exeeds the available stock
    }
  }
  return true; // All products have available stock
}

// Test case 1 - Happy path
let shoppingCart = [
  { id: 1, name: "Tabla de Surf", quantity: 3, availableStock: 4 },
  { id: 2, name: "Pelota de Futbol", quantity: 2, availableStock: 2 },
  { id: 3, name: "Skate", quantity: 3, availableStock: 4 },
];
console.log(`Ejercicio 2 - Test case 1 - Happy path`);
console.log(`Input: cart = ${JSON.stringify(shoppingCart)}`);
let validStock = validateCartStock(shoppingCart);
console.log(`Output: Stock válido = ${validStock}`);
console.log("----------------------------------------------------------------");

// Test case 2 - The cart must be an array of objects containig the required properties
shoppingCart = {};
console.log(`Ejercicio 2 - Test case 2 - The cart must be an array`);
console.log(`Input: cart = ${JSON.stringify(shoppingCart)}`);
validStock = validateCartStock(shoppingCart);
console.log(`Output: Stock válido = ${validStock}`);
console.log("*****************");

shoppingCart = [
  ["id: 1", "name: Tabla de surf", "quantity: 3", "availableStock: 5"],
  { id: 2, name: "Pelota de Futbol", quantity: 3, availableStock: 2 },
  { id: 3, name: "Skate", quantity: 3, availableStock: 4 },
];
console.log(`Ejercicio 2 - Test case 2 - Cart items must be objects`);
console.log(`Input: cart = ${JSON.stringify(shoppingCart)}`);
validStock = validateCartStock(shoppingCart);
console.log(`Output: Stock válido = ${validStock}`);
console.log("*****************");

shoppingCart = [
  { id: 1, quantity: 3, availableStock: 4 },
  { id: 2, name: "Pelota de Futbol", quantity: 3, availableStock: 2 },
  { id: 3, name: "Skate", quantity: 3, availableStock: 4 },
];
console.log(`Ejercicio 2 - Test case 2 - Property name is missing in one item`);
console.log(`Input: cart = ${JSON.stringify(shoppingCart)}`);
validStock = validateCartStock(shoppingCart);
console.log(`Output: Stock válido = ${validStock}`);
console.log("*****************");

shoppingCart = [
  { id: 1, name: "Tabla de Surf", quantity: 3, availableStock: 4 },
  { id: 2, name: "Pelota de Futbol", availableStock: 2 },
  { id: 3, name: "Skate", quantity: 3, availableStock: 4 },
];
console.log(
  `Ejercicio 2 - Test case 2 - Property quantity is missing in one item`
);
console.log(`Input: cart = ${JSON.stringify(shoppingCart)}`);
validStock = validateCartStock(shoppingCart);
console.log(`Output: Stock válido = ${validStock}`);
console.log("*****************");

shoppingCart = [
  { id: 1, name: "Tabla de Surf", quantity: 3, availableStock: 4 },
  { id: 2, name: "Pelota de Futbol", quantity: 3 },
  { id: 3, name: "Skate", quantity: 3, availableStock: 4 },
];
console.log(
  `Ejercicio 2 - Test case 2 - Property avaliableStock is missing in one item`
);
console.log(`Input: cart = ${JSON.stringify(shoppingCart)}`);
validStock = validateCartStock(shoppingCart);
console.log(`Output: Stock válido = ${validStock}`);
console.log("*****************");

// Test case 3 - If quantity > availableStock in one item, must be returned false
shoppingCart = [
  { id: 1, name: "Tabla de Surf", quantity: 3, availableStock: 4 },
  { id: 2, name: "Pelota de Futbol", quantity: 3, availableStock: 2 },
  { id: 3, name: "Skate", quantity: 3, availableStock: 4 },
];
console.log(
  `Ejercicio 2 - Test case 3 - If quantity > availableStock in one item, must be returned false`
);
console.log(`Input: cart = ${JSON.stringify(shoppingCart)}`);
validStock = validateCartStock(shoppingCart);
console.log(`Output: Stock válido = ${validStock}`);
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");

/* Ejercicio 3: Filtro de productos por precio
Descripción: Crea una función que reciba una lista de productos (array de objetos) y un rango de precios (mínimo y máximo). La función debe devolver un array con los productos cuyo precio esté dentro de ese rango.
Requerimientos:
Cada producto debe tener las propiedades nombre y precio.
La función debe devolver los productos que cumplan con el rango de precios. */

function filterProductsByPrice(products, minPrice, maxPrice) {
  // Checking that products is an array and is not empty
  if (!Array.isArray(products) || products.length === 0) {
    const errorMessageProducts =
      "La lista de productos es inválida. La misma debe ser un array conteniendo los productos a filtrar.";
    console.error(errorMessageProducts);
    return errorMessageProducts;
  }

  // Checking that minPrice and maxPrice are positive numbers and minPrice is lower than maxPrice
  if (
    typeof minPrice !== "number" ||
    typeof maxPrice !== "number" ||
    minPrice < 0 ||
    maxPrice < 0 ||
    minPrice >= maxPrice
  ) {
    const errorPriceRange = "El rango de precios no es válido.";
    console.error(errorPriceRange);
    return errorPriceRange;
  }

  return products.filter((product) => {
    // Checking if each product is an object containing the required properties
    if (
      typeof product !== "object" ||
      product === null ||
      Array.isArray(product) ||
      product.name === undefined ||
      !product.price
    ) {
      console.error(`Estructura inválida para el producto id: ${product.id}. Asegurate de que cada producto sea una objeto que contenga las propiedades name y price.
      `);
      return false;
    }
    // Checking if the name is a string and not an empty one.
    if (
      product.name === "" ||
      typeof product.name !== "string" ||
      product.name.length > 50
    ) {
      console.error(`Nombre inválido en el producto con id: ${product.id}`);
      return false;
    }
    // Checking if the price is a number and not negative one
    if (typeof product.price !== "number" || product.price < 0) {
      console.error(`Precio inválido en el producto con id: ${product.id}.`);
      return false;
    }

    return product.price >= minPrice && product.price <= maxPrice;
  });
}

// Test case 1 - Happy path
let productList = [
  { id: 1, name: "Pelota de Futbol", price: 10 },
  { id: 2, name: "Tabla de Surf", price: 50 },
  { id: 3, name: "Mesa de Ping-Pong", price: 30 },
  { id: 4, name: "Naipes", price: 70 },
  { id: 5, name: "Raqueta de Tennis", price: 20 },
];
let minPrice = 10;
let maxPrice = 30;
console.log(`Ejercicio 3 - Test case 1 - Happy path`);
console.log(
  `Input: minPrice = ${minPrice}, maxPrice = ${maxPrice}, products = ${JSON.stringify(
    productList
  )},`
);
let filteredProducts = filterProductsByPrice(productList, minPrice, maxPrice);
console.log(
  `Output: Productos filtrados = ${JSON.stringify(filteredProducts)}`
);
console.log("----------------------------------------------------------------");

// Test case 2 - products must be an array of objects containig the required properties
productList = {};
minPrice = 15;
maxPrice = 25;
console.log(`Ejercicio 3 - Test case 2 - products must be an array`);
console.log(
  `Input: minPrice: ${minPrice}, maxPrice = ${maxPrice} products = ${JSON.stringify(
    productList
  )}`
);
filteredProducts = filterProductsByPrice(productList, minPrice, maxPrice);
console.log(
  `Output: Productos filtrados = ${JSON.stringify(filteredProducts)}`
);
console.log("*****************");

productList = [
  { id: 1, price: 10 },
  { id: 2, name: "Tabla de Surf", price: 50 },
  { id: 3, name: "Mesa de Ping-Pong", price: 30 },
  { id: 4, name: "Naipes", price: 70 },
  { id: 5, name: "Raqueta de Tennis", price: 20 },
];
minPrice = 10;
maxPrice = 30;
console.log(
  `Ejercicio 3 - Test case 2 - Property name is missing in one product`
);
console.log(
  `Input: minPrice: ${minPrice}, maxPrice = ${maxPrice} products = ${JSON.stringify(
    productList
  )}`
);
filteredProducts = filterProductsByPrice(productList, minPrice, maxPrice);
console.log(
  `Output: Productos filtrados = ${JSON.stringify(filteredProducts)}`
);
console.log("*****************");

productList = [
  { id: 1, name: "Pelota de Futbol", price: 10 },
  { id: 2, name: "Tabla de Surf" },
  { id: 3, name: "Mesa de Ping-Pong", price: 30 },
  { id: 4, name: "Naipes", price: 70 },
  { id: 5, name: "Raqueta de Tennis", price: 20 },
];
minPrice = 20;
maxPrice = 40;
console.log(
  `Ejercicio 3 - Test case 2 - Property price is missing in one product`
);
console.log(
  `Input: minPrice: ${minPrice}, maxPrice = ${maxPrice} products = ${JSON.stringify(
    productList
  )}`
);
filteredProducts = filterProductsByPrice(productList, minPrice, maxPrice);
console.log(
  `Output: Productos filtrados = ${JSON.stringify(filteredProducts)}`
);
console.log("*****************");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");

/* Ejercicio 4: Simulación de pagos en cuotas
Descripción: Crea una función que simule un pago en cuotas de un producto. La función debe recibir el precio del producto, el número de cuotas y el interés mensual. Debe devolver un array con el detalle de cada cuota, mostrando el número de cuota y el monto a pagar con intereses.
Requerimientos:
El interés debe ser aplicado de forma compuesta sobre cada cuota.
Devuelve un array donde cada cuota tiene el número de cuota y el monto correspondiente. */

function calculateInstallments(price, numInstallments, monthlyInterest) {
  // Checking price
  if (typeof price !== "number" || price < 0) {
    const priceError = "El precio debe ser un número y no debe ser negativo.";
    console.error(priceError);
    return priceError;
  }

  // Checking numInstallments
  if (typeof numInstallments !== "number" || numInstallments < 1) {
    const numInstallmentsError =
      "La cantidad de cuotas debe ser un número positivo.";
    console.error(numInstallmentsError);
    return numInstallmentsError;
  }

  // Checking monthly interest
  if (
    typeof monthlyInterest !== "number" ||
    monthlyInterest < 0 ||
    monthlyInterest > 100
  ) {
    const monthlyInterestError = "Interés mensual inválido";
    console.error(monthlyInterestError);
    return monthlyInterestError;
  }

  const installments = [];

  // Special case: If the payment is with only one installment we will not add the monthly interest
  if (numInstallments === 1) {
    installments.push({
      installmentNumber: numInstallments,
      amount: price.toFixed(2),
    });

    return installments;
  }

  for (let i = 1; i <= numInstallments; i++) {
    // Calculating the installment amount with compound interest
    const installmentAmount =
      (price * Math.pow(1 + monthlyInterest / 100, i)) / numInstallments;

    installments.push({
      installmentNumber: i,
      amount: installmentAmount.toFixed(2),
    });
  }

  return installments;
}

// Test case 1 - Happy path
let price = 400;
let numInstallments = 4;
let monthlyInterest = 10;
console.log(`Ejercicio 4 - Test case 1 - Happy path`);
console.log(
  `Input: price = ${price}, numInstallments = ${numInstallments}, monthlyInterest = ${monthlyInterest}`
);
const result = calculateInstallments(price, numInstallments, monthlyInterest);
console.log(`Output: Detalle de cuotas = ${JSON.stringify(result)}`);
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
