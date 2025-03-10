const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 79.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 788.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 1279.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg',
    price: 9.99,
  },
];


function displayProduct(productlist) {
  const myProducts = productlist.map((product) => {
    return `
      <article class="product">
        <img
          src="${product.image}"
          class="product-img img"
          alt=""
        />
        <footer>
          <h5 class="product-name">${product.title}</h5>
          <span class="product-price">$${product.price}</span>
           <h5 class="product-name">${product.company}</h5>
        </footer>
      </article>`
  })
  document.getElementById("productsdetail").innerHTML = myProducts.join(" ");
}

const buttons = products.map((product) => `
 <button class="company-btn" data-id="${product.company}"
  onclick = "filterMenu('${product.company}')">${product.company}</button>`
)
document.getElementById("companiesname").innerHTML = buttons.join(" ");

function filterMenu(company) {
  let filteredCompany = products.filter((product) =>  product.company == company );
  displayProduct(filteredCompany);
}

function arrangearray(order) {
  products.sort(function (a, b) {
    if (order == "asc") {
      return a.price - b.price;
    }
    else {
      return b.price - a.price;
    }
  })
  displayProduct(products);
}

const listCompanies = products.map((product) => product.company);

function removeDuplicate(list) 
{
  return list.reduce((a,b) => {
    if(!a.includes(b)){
      a.push(b);
    }
    return a;
  },["all"]);
}
const uniqueCompanies = removeDuplicate(listCompanies);
console.log(uniqueCompanies);

const btnlist = uniqueCompanies.map((company) => `
  <button class="company-btn" data-id="${company}"
    onclick="filterMenu('${company}')">${company}</button>`
).join("");

document.getElementById("companiesname").innerHTML = btnlist;


function filterMenu(company) {
  if (company === "all") {
    displayProduct(products);
  } else {
    let filteredCompany = products.filter((product) => product.company === company);
    displayProduct(filteredCompany);
  }
}


function hightolow() {
  products.sort(function (a, b) {
    return b.price - a.price;
  })
  displayProduct(products);
}

function lowtohigh() {
  products.sort(function (a, b) {
    return a.price - b.price;
  })

  displayProduct(products);

}

// Function to render buttons
function renderCompanyButtons(companies) {
  const btnlist = companies.map((company) => `
    <button class="company-btn" data-id="${company}"
      onclick="filterMenu('${company}')">${company}</button>`
  ).join("");

  document.getElementById("companiesname").innerHTML = btnlist;
}

function sortCompanies(order) {
  let sortedCompanies = uniqueCompanies.map(item => item); // Copy the array to avoid modifying the original
  if (order === "asc") {
    sortedCompanies.sort();
  } else {
    sortedCompanies.sort().reverse();
  }
  renderCompanyButtons(sortedCompanies);
}

displayProduct(products);
