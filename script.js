// For navbar on ipad and mobile
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) 
{
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) 
{
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// For sproduct.html to change the images
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

Array.from(smallimg).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        temp_img=MainImg.src /*added by me */
        MainImg.src = element.src
        element.src=temp_img /*added by me */
    });
});

//To remove items from cart and change subtotal
var remove = document.getElementsByClassName("fa-circle-xmark");
for (var i = 0; i < remove.length; i++) {
    var removeButton = remove[i]
    removeButton.addEventListener('click',function(event) {
        var buttonClicked = event.target
        updateCartTotal()
        buttonClicked.parentElement.parentElement.parentElement.remove()  
    })
}

function updateCartTotal() {
    var cartItems = document.getElementById('price')
    var total = document.getElementById('total').innerText.replace('Rs.','')
    total = total - cartItems.innerText.replace('Rs.','')
    document.getElementById('total').innerHTML = 'Rs.' + total
}

//To add items to cart and change subtotal
var add = document.getElementsByClassName('add')
for (var i = 0; i < add.length; i++) {
    var addButton = add[i]
    addButton.addEventListener('click',addToCart)
}

function addToCart(event) {
    var buttonClicked = event.target
    var shopItem = buttonClicked.parentElement.parentElement
    var image = shopItem.getElementsByTagName('img')[0].src
    var title = shopItem.getElementsByTagName('h4')[0].innerText
    var price = shopItem.getElementsByTagName('h2')[0].innerText
    addItemToCart(image, title, price)
}

function addItemToCart(image, title, price) {
    var cartRow = document.createElement('tr')
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-items')
    console.log(cartRow,cartItems)
    cartItems.append(cartRow)
}