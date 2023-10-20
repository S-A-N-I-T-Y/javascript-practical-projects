const product = [
    {
        id: 0,
        image: "/IMAGES/justin.jpg",
        title: 'something',
        price: 120,
    },
    {
        id: 1,
        image: "/IMAGES/tems.jpg",
        title: 'something',
        price: 150,
    },
    {
        id: 2,
        image: "/IMAGES/Burna-Boy.jpg",
        title: 'something',
        price: 180,
    },
    {
        id: 3,
        image: "/IMAGES/Rema.jpg",
        title: 'something',
        price: 180,
    },
    {

        id: 4,
        image: "/IMAGES/santino.jpg",
        title: 'something',
        price: 180,
    },
    {

        id: 5,
        image: "/IMAGES/davido.jpg",
        title: 'something',
        price: 180,
    }
];

const categories = [...new Set(product.map((item) => {
    return item
}))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item
    return (
        `<div class = "box" >
           <div class = "img-box" >
              <img class = "images" src = ${image}> </img>
        </div>
        
        <div class = "bottom">
           <p>${title}</p>
           <h2>$ ${price}.00</h2>` +
        "<button onclick = 'addtoCart(" + (i++) + ")'>Add to Cart</button>" +
        `</div>
        </div>`

    )
}).join("")

var cart = []

function addtoCart(a) {
    cart.push({ ...categories[a] })
    displayCart(a)
}
function delElement() {
    cart.splice(0, 1)
    displayCart()
}

function displayCart(a) {
    let j = 0, total = 0
    document.getElementById("count").innerHTML = cart.length
    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = 'Your cart is empty'
        document.getElementById("total").innerHTML = "$ " + 0 + ".00"
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price
            document.getElementById("total").innerHTML = "$ " + total + ".00"
            return (
                `<div class = "cart-item">
                    <div class = "row-img">
                      <img class = "row-img" src = ${image}>
                    </div>
                    
                    <P>${title}</P>
                    <h2>${price}.00</h2>` + "<i class = 'fa-solid fa-trash' onclick = 'delElement(" + (j++) + ")'></i> </div>"
            );
        }).join("")
    }
} 