const closeModal = document.querySelector('.js-close');
const modal = document.querySelector('.modal');
closeModal.addEventListener('click', () =>{ modal.style.display = 'none' });


const productModal = document.querySelector('.main-image');
productModal.addEventListener('click', () => { modal.style.display = 'block'});





const  slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.previous-button');
const nextBtn = document.querySelector('.next-button');


const quantityDisplay = document.querySelector('.display-add-to-cart-quantity');




const quantityAdd = document.querySelector('.js-add');
const quantitySubtract = document.querySelector('.js-subtract');
const message = document.querySelector('.js-message')

quantityAdd.addEventListener('click', () => {
if(quantityDisplay.innerHTML >= 0){
  message.style.opacity = 0;
}
if( quantityDisplay.innerHTML <= 9){quantityDisplay.innerHTML ++} else{
  message.style.opacity = 1.0;
  message.innerHTML = 'Cart is full!'
}

});


quantitySubtract.addEventListener('click', () => {
if(quantityDisplay.innerHTML <= 10){
  message.style.opacity = 0;
}
if (quantityDisplay.innerHTML > 0) {quantityDisplay.innerHTML --} else{
  message.style.opacity = 1.0;
  message.innerHTML = 'No items in Cart!'
}

}
);

const cartButton = document.querySelector('.js-cart-display');
const cart = document.querySelector('.js-cart');

cartButton.addEventListener('click',() => {
if( cart.style.opacity = '0'){
  cart.style.opacity = '1';
  
} else {
  cart.style.opacity = 1;
  alert('test');
}

});

// document.querySelector('.js-below-nav-bar').addEventListener('click', () => cart.style.opacity = 0);

const addToCartButton = document.querySelector('.js-add-to-cart');




/*
document.querySelector('.js-thumbnail1').addEventListener('click',() => {

changeSlides(1);
});

document.querySelector('.js-thumbnail2').addEventListener('click',() => {
changeSlides(2);
});
document.querySelector('.js-thumbnail3').addEventListener('click',() => {
changeSlides(3);
});
document.querySelector('.js-thumbnail4').addEventListener('click',() => {

changeSlides(4);
});

*/
const cartProducts = document.querySelector('.js-products-in-cart');
const price = document.querySelector('.js-price').innerHTML;

// Addd items to Cart
addToCartButton.addEventListener('click',() =>  {
const quantity = quantityDisplay.innerHTML;
total = quantity * price;
if (quantity > 0) {
document.querySelector('.js-cart-display').style.height = 'auto';
cartProducts.innerHTML = `
<img src="./images/image-product-1-thumbnail.jpg" class="image-in-cart">
<div class="name-of-products-in-cart">
<div style = "display:flex;">
Fall Limited Edition Sneakers
  
</div>
  <div class="price-and-quantity">
  
    $ ${price} x ${quantity}  <b style="" class="math-in-cart">$${total}.00</b> 
    <img src="./images/icon-delete.svg" class= "js-delete-item  delete-item-in-cart" >
  </div>
</div>
     
`;
document.querySelector('.js-checkout').style.display = 'block';
document.querySelector('.check-out').style.opacity = '1';
cart.style.opacity = 1;
document.querySelector('.js-delete-item').addEventListener('click', () => { 
  cartProducts.innerHTML = 'Your Cart is Empty';
  document.querySelector('.js-checkout').style.display = 'none';
  

})
}

});


function changeSlides (slideNumber){

document.querySelector('.js-slide').innerHTML = `
<img src="./images/image-product-${slideNumber}.jpg" class="main-image">
`
document.querySelector(`.js-thumbnail${slideNumber}`).style.border = '2px solid hsl(26, 100%, 55%)';
document.querySelector(`.js-thumbnail-image${slideNumber}`).style.opacity = '0.6';
}


document.querySelector('.js-modal-thumbnails1').addEventListener('click',() => {

changeSlidesModal(1);
document.querySelector(`.js-modal-thumbnail1`).style.border = '2px solid hsl(26, 100%, 55%)';
});
document.querySelector('.js-modal-thumbnails2').addEventListener('click',() => {
changeSlidesModal(2);
document.querySelector(`.js-modal-thumbnail2`).style.border = '2px solid hsl(26, 100%, 55%)';
});
document.querySelector('.js-modal-thumbnails3').addEventListener('click',() => {
changeSlidesModal(3);
document.querySelector(`.js-modal-thumbnail3`).style.border = '2px solid hsl(26, 100%, 55%)';
});
document.querySelector('.js-modal-thumbnails4').addEventListener('click',() => {
changeSlidesModal(4);
document.querySelector(`.js-modal-thumbnail4`).style.border = '2px solid hsl(26, 100%, 55%)';
});




function changeSlidesModal (slideNumber){

document.querySelector('.js-modal-slide').innerHTML = `
<img src="./images/image-product-${slideNumber}.jpg" class="main-image">
`
for(let i = 1; i < 5; i++){
  document.querySelector(`.js-modal-thumbnail${i}`).style.border ='none'
  
}
// document.querySelector(`.js-modal-thumbnail${slideNumber}`).style.border = '2px solid hsl(26, 100%, 55%)';
// document.querySelector(`.js-modal-thumbnails${slideNumber}`).style.opacity = '0.8';
}

let currentSlide = 1;

document.querySelector('.slide-show-button-right').addEventListener('click', () => {
changeSlidesModalFoward(currentSlide);
currentSlide ++;
if (currentSlide === 5){
currentSlide = 1;
}

});


document.querySelector('.slide-show-button-left').addEventListener('click', () => {

changeSlidesModalBack(currentSlide);

currentSlide --;
if (currentSlide === 1){
currentSlide = 5;
}

});








function changeSlidesModalFoward (currentSlide){
    for( let i = 1; i < 5; i++){
    const slideNumber = currentSlide
    if (i === slideNumber){
    console.log('test1');
    document.querySelector('.js-modal-slide').innerHTML = `
    <img src="./images/image-product-${slideNumber}.jpg" class="main-image">
    `;
    for(let i = 1; i < 5; i++){
      document.querySelector(`.js-modal-thumbnail${i}`).style.border ='none' 
    }
    document.querySelector(`.js-modal-thumbnail${slideNumber}`).style.border = '2px solid hsl(26, 100%, 55%)';
    }
    };
    console.log('test2');

}


function changeSlidesModalBack (currentSlide){
  for( let i = 1; i < 5; i++){
  const slideNumber = currentSlide
  if (i === slideNumber){
  console.log('testPrime');
  document.querySelector('.js-modal-slide').innerHTML = `
  <img src="./images/image-product-${slideNumber}.jpg" class="main-image">
  `;
  for(let i = 1; i < 5; i++){
    document.querySelector(`.js-modal-thumbnail${i}`).style.border ='none' 
  }
  document.querySelector(`.js-modal-thumbnail${slideNumber}`).style.border = '2px solid hsl(26, 100%, 55%)';
  }
  };
  console.log('test2');

}







//open and close cart


document.querySelector('.js-checkout').addEventListener('click', () => {
    closeCart();
    cartOpenOrClose = 'close';
});


let cartOpenOrClose = 'close';

document.querySelector('.js-cart-display').addEventListener('click', () => {
  if(cartOpenOrClose === 'close'){
    openCart();
    cartOpenOrClose = 'open';
    
  }else if(cartOpenOrClose === 'open') {
    closeCart();
    cartOpenOrClose = 'close';
    
  }
  
})


function openCart (){
  document.querySelector('.js-cart').style.display = 'block';
  
  console.log('cart open');
}
function closeCart(){
  document.querySelector('.js-cart').style.display = 'none';
  cartOpenOrClose = 1;
}
console.log(cartOpenOrClose);