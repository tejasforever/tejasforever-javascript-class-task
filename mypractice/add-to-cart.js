const myCart = [];
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
function display(vb) {
  const t = vb.map(function (v) {
    return ` <article class="menu-item">
            <img src="${v.img}" alt="menu item" class="photo" />
            <div class="item-info">
              <header>
                <h4>${v.title}</h4>
                <h4 class="price">$${v.price}</h4>
              </header>
              <p class="item-text">
               ${v.desc}
              </p>
            </div>
            <button class="btn" onClick="addToCart(${v.id})">Order Now</button>
          </article>`
  })
  document.getElementById("menu").innerHTML = t.join(" ");
}

const newMenu = menu.reduce(function (s, t) {
  if (!s.includes(t.category)) {
    s.push(t.category);
  }
  return s;
}, ["all"]);
console.log(newMenu);

const buttons = newMenu.map(function (category) {
  return `<button type="button" class="filter-btn" 
  data-id="breakfast"
  onclick = "filterMenu('${category}')">
  ${category}
  </button>`
})
document.getElementById("btn").innerHTML = buttons.join(" ");

function filterMenu(category) {
  if (category == "all") {
    display(menu);
  } else {
    let op = menu.filter(function (va) {
      return va.category == category;
    });
    display(op);
  }
}
function hightolow() {
  menu.sort(function (a, b) {
    return b.price - a.price;
  })
  display(menu);
}
function lowtohigh() {
  menu.sort(function (a, b) {
    return a.price - b.price;
  })
  display(menu);
}

display(menu);

function addToCart(id) {
  const myDish = myCart.find(function (value) {
    return value.id == id;
  })
  if (myDish) {
    if (myDish.quantity >= 10) {
      alert("Sorry, you can't order more than 10 of this dish");
    }
    else {
      myDish.quantity = myDish.quantity + 1;
    }
  }
  else {
    const newDish = menu.find(function (value) {
      return value.id == id;
    });
    newDish.quantity = 1;
    myCart.push(newDish);
  }
  // document.getElementById("mycartcount").innerHTML = myCart.length;

  const cartItems = myCart.map(function (v) {
    return `<article class="cart-item">
      <img src="${v.img}" alt="${v.title}" class="photo" />
      <div class="item-info item-text">
        <header>
          <h4>${v.title}</h4>
          <h4 class="price">$${v.price}</h4>
        </header>
        <h4 class="item-text quantity">Numbers of Items : </br></br><span class="price"> ${v.quantity} </span></h4>
        <h4 class="item-text quantity">Items Total Price : </br></br><span class="price"> $${v.price * v.quantity} </span></h4>
      </div>
    </article>`}).join("");

  document.getElementById("cartcount").innerHTML = cartItems;

  const totalCartPrice = myCart.reduce((a, cartData) => a + cartData.price * cartData.quantity, 0);
  document.getElementById("totalcartvalue").innerHTML = `Total Price of Cart : $${totalCartPrice}`;

  const totalCartQuantity = myCart.reduce((a, cartData) => a + cartData.quantity, 0);
  document.getElementById("totalcartquantity").innerHTML = `Total Quantity of Cart : ${totalCartQuantity}`;
}
