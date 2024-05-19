
window.onload = function () {

    const accountMenu = document.getElementById('account');
    accountMenu.onmouseover = ()=>{
        const dropdown = document.getElementById('account-menu');
       dropdown.style.display = 'flex';
      dropdown.style.animation = 'dropdown 0.5s linear forwards';

    }
    accountMenu.onmouseout = ()=>{
        const dropdown = document.getElementById('account-menu');
       dropdown.style.display = 'none';
    }

    const cartBtn = document.getElementById('cart');
    cartBtn.onclick = function() {
        const overlay = document.getElementById('cart-overlay');
        overlay.style.display = 'block';
        const cartList = document.getElementById('cart-list');
        cartList.style.animation = 'cartlist 0.5s linear forwards';
        
        
        
    }

    const closeCart = document.getElementById('close-cartList');
    closeCart.onclick = function(){
const closeBtn = document.getElementById('cart-list');
closeBtn.style.animation = 'close 0.5s linear forwards';
const overlay = document.getElementById('cart-overlay');

setTimeout(()=>{
 overlay.style.display = 'none';
},500)
        
}

// Increase and Decrease Quantity

const increaseQnt = document.getElementsByClassName('increase-qnt');
for (let btn of increaseQnt){
    btn.onclick = ()=>{
        const div = btn.parentElement;
        const label =  div.getElementsByClassName('qnt')[0];
        const text = Number(label.innerHTML);
        label.innerHTML = text+1;

    }
}
const decreaseQnt = document.getElementsByClassName('decrease-qnt');
for (let btn of decreaseQnt){
    btn.onclick = ()=>{
        const div = btn.parentElement;
        const label =  div.getElementsByClassName('qnt')[0];
        const text = Number(label.innerHTML);
        if(text > 1) label.innerHTML = text-1;
        

    }
}


}