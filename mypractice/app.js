const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
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
                <h4 class="price">${v.price}</h4>
              </header>
              <p class="item-text">
               ${v.desc}
              </p>
            </div>
          </article>`
  })
  document.getElementById("menu").innerHTML = t.join(" ");
}
const buttons = menu.map(function (v) {
  return `<button type="button" class="filter-btn" 
  data-id="breakfast"
  onclick = "filterMenu('${v.category}')">
  ${v.category}
  </button>`
})
document.getElementById("btn").innerHTML = buttons.join(" ");

const newMenu = buttons.reduce(function (s, t) {
  if (!s.includes(t.category)) {
    s.push(t.category);
  }
  return s;
}, []);
console.log(newMenu);

function filterMenu(category) {
  let op = menu.filter(function (va) {
    return va.category == category;
  });
  display(op)
}
function arrangearray(order) {
  menu.sort(function (a, b) {
    if (order == "asc") {
      return a.price - b.price;
    }
    else {
      return b.price - a.price;
    }
  })
  display(menu);
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





let ab = [1, 2, 2, 5, 4, 1, 6, 3, 4, 8, 8, 7];
let ta = ab.reduce(function (v, i) {
  if (!v.includes(i)) {
    v.push(i);
  }
  return v;
}, []);
// console.log(ta);


let xy = [
  {
    name: "ab",
    id: 1,
    weight: 50
  },
  {
    name: "bc",
    id: 2,
    weight: 40
  },
  {
    name: "cd",
    id: 3,
    weight: 60
  },
  {
    name: "de",
    id: 4,
    weight: 50
  },
  {
    name: "ef",
    id: 5,
    weight: 40
  },
  {
    name: "fg",
    id: 6,
    weight: 60
  },
  {
    name: "gh",
    id: 7,
    weight: 40
  },
  {
    name: "hi",
    id: 8,
    weight: 50
  }
];

let yz = xy.map(function (bc) {
  return `<div class="group">
              <div class="group__item">
                <h1>Name:    ${bc.name}</h1>
                <p>id: ${bc.id}</p>
                <p>weight: ${bc.weight}</p>
                </div>
              </div>`});
// console.log(yz);
document.getElementById('tj').innerHTML = yz.join("");


let gh = xy.reduce(function (e, f) {
  if (!e.includes(f.weight)) {
    e.push(f.weight);
  }
  return e;
},[]);
// console.log(gh);

let mn = gh.map(function (kl) {
  return `<li>${kl}</li>`
})

document.getElementById('weightlist').innerHTML = mn.join("");

let pq = xy.reduce(function (j, k) {
  if (!j.includes(k)) {
    j.push(k);
  }
  return j;
}, []);
// console.log(pq);
