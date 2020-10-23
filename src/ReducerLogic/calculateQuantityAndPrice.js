function calculateQuantityAndPrice(cart) {
  let totalQuantity = 0;
  let totalPrice = 0;
  for (let key in cart) {
    totalQuantity = cart[key].length + totalQuantity;
    for (let key2 in cart[key]) {
      totalPrice = cart[key][key2].price + totalPrice;
    }
  }
  totalPrice.toFixed(2);
  return [totalQuantity, totalPrice];
}

export default calculateQuantityAndPrice;
