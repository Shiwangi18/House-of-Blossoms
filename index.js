let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector(".fa-shopping-cart").onclick=()=>{
    shoppingcart.classList.toggle('active');
}

let login = document.querySelector('.login-form');

document.querySelector(".fa-user").onclick=()=>{
    login.classList.toggle('active');
}