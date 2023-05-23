export const AddToCart = (productID) => {
  const userCart = localStorage.getItem("Epcart");
  if (userCart && userCart !== "") {
    let localcart = JSON.parse(userCart);
    localcart.push(productID);
    localStorage.setItem("Epcart", JSON.stringify(localcart));
    console.log("yes", localcart);
  } else {
    let temp = [];
    temp.push(productID);
    localStorage.setItem("Epcart", JSON.stringify(temp));
  }
};

export const isProductInCart = (productID) => {
  const userCart = localStorage.getItem("Epcart");

  if (userCart && userCart !== "") {
    let localcart = JSON.parse(userCart);
    return localcart.includes(productID);
  } else {
    return false;
  }
};
