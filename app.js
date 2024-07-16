const cardsWrapper = document.querySelector('.cards-wrapper')
const menuBody = document.querySelector('.menu-body')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.menu-close')
const openMunuBtn = document.querySelector('.cart-btn')

openMunuBtn.addEventListener('click', ()=> {
    openMenu.style.right = '0'
})

closeMenu.addEventListener('click', ()=> {
    openMenu.style.right = '-100%'
})

const products = [
    {
        img: './images/reddead-redemption-2.jpg',
        title: 'Red Dead Redemption 2',
        price: 39.99,
        date: 'October 26, 2018',
    },
    {
        img: './images/fortnite.jpg',
        title: 'Fortnite',
        price: 18.49,
        date: 'December 6, 2018',
    },
    {
        img: './images/gata-5.jpg',
        title: 'Grand Theft Auto V',
        price: 89.99,
        date: 'September 17, 2013',
    },
    {
        img: './images/farcry.jpeg',
        title: 'Far Cry 6',
        price: 59.99,
        date: 'October 7, 2021',
    },
    {
        img: './images/cyberpunk2077.jpg',
        title: 'Cyberpunk 2077',
        price: 59.99,
        date: '10 December 2020',
    },
    {
        img: './images/forza-horizon-5.webp',
        title: 'Forza Horizon 5',
        price: 69.99,
        date: 'November 5, 2021',
    }
]

const dontProduct = document.querySelector('.dont-product')

dontProduct.style.display = 'none'

const cartProduct = []

function cartLength() {
    if(cartProduct.length) {
        console.log('yes')
        dontProduct.style.display = 'none'
    } else {
        console.log('now')
        dontProduct.style.display = 'flex'
    }
}

cartLength()

products.forEach((el) => {
    const product = {
        img: el.img,
        title: el.title,
        price: el.price,
        date: el.date,
        quantity: 1,
    }
    cartProduct.push(product)
    cardsWrapper.innerHTML += `
    <div class="card">
      <img class="card-img" src="${el.img}" alt="${el.title}">
      <div class="card-text-wrapper">
        <h1 class="card-title">${el.title}</h1>
        <span class="card-price">${el.price}$</span>
      </div>
      <div class="card-btns-wrapper">
        <button class="add-to-cart">add to cart</button>
      </div>
      <span class="card-date">${el.date}</span>
    </div>
    `
})

const addToCartBtn = document.querySelectorAll('.add-to-cart')

addToCartBtn.forEach((el, i) => {
    el.addEventListener('click', () => {
        const product = cartProduct[i]
        cartLength()
        console.log(product)
        menuBody.innerHTML += `
        <div class="cart-item">
          <div class="cart-item-wrap">
            <img class="cart-item-img" src="${product.img}" alt="">
            <h1 class="cart-item-title">${product.title}</h1>
            <span class="cart-item-price">${product.price}</span>
          </div>
        </div>
        `
        localStorage.setItem('cart', JSON.stringify(product))
    })
})

