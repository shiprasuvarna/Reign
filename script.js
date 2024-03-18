const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}





// let cartItems = document.getElementById("cartItems");
// function addToCart(){
//     let productName = document.getElementById("productName").value;
//     let quantity = document.getElementById("quantity").value;
//     let price = document.getElementById("price").value;
//     let imageLink = document.getElementById("imageLink").value;
//     // console.log(productName,quantity,price,imageLink);

//     let itemDiv = document.createElement("div");
//     itemDiv.className = "item";
//     itemDiv.innerHTML = `    <img src=${imageLink} alt=${productName}>
//                             <div class="name">${productName}</div>
//                             <div class="qty">${quantity}</div>
//                             <div class="price">${price}</div>
//                         `;
//     cartItems.appendChild(itemDiv);
 


// }


// var addItemId = 0;
// function addToCart(item) {
// var selectedItem = document.createElement('div');
// selectedItem.classList.add('cartImg');
// selectedItem.setAttribute('id',addItemId);
// var img = document.createEleme
// var cartItems = document.getElementById('item');
// cartItems.append(selectedItem);

// }

