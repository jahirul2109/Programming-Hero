const addProduct = () =>{
    const productEi = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEi.value;
    const quantity = parseInt(quantityEl.value);
    // console.log(`${product} : ${quantity}`)
    display(product,quantity);
    addCartToAccount (product, quantity)
    productEi.value = '';
    quantityEl.value = '';
}


const getCard = ()=> {
  let  cart = {};
  const cartJSON = localStorage.getItem('cart');
  if (cartJSON) {
    cart = JSON.parse(cartJSON )
    
  }
    return  cart ;
}

const addCartToAccount = (product , quantity)=> {
    const cart = getCard();
    if (cart[product]) {
        cart[product] = cart[product] + quantity ;
    } else {

        cart [product] =  quantity ;
    }
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON)

}
const display = ( product , quantity)=> {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerHTML = `
    ${product} : ${quantity}
    `;
    ul.appendChild(li)
    product = '';
    quantity = '';
}

function displayAddToCart () {
    const cart = getCard ()
    for (const product in cart) {
        const quantity = cart[product];
        console.log (product)
        display(product , quantity)
    }
}
displayAddToCart()