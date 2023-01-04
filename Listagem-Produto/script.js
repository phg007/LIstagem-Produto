const data = [
  {
    id: 1,
    name: 'Camiseta Branca Básica',
    img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 74,
    cat: 'Branca',
  },
  {
    id: 11,
    name: 'Camiseta Preta Básica',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 74,
    cat: 'Preta',
  },
  {
    id: 2,
    name: 'Camiseta Colorida Básica Estampa ',
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 40,
    cat: 'Colorida',
  },
  {
    id: 3,
    name: 'Camiseta Básica Preta 2',
    img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: 200,
    cat: 'Preta',
  },
  {
    id: 4,
    name: 'Camiseta Básica Branca 2',
    img: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: 16,
    cat: 'Branca',
  },
  {
    id: 5,
    name: 'Moletom 705 ',
    img: 'https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: 74,
    cat: 'Preta',
  },
];

const productsContainer = document.querySelector('.products');
const searchInput = document.querySelector('.search');
const categoriesContainer = document.querySelector('.cats');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">$${product.price}</span>
        </div>
    `
    )
    .join('');
};

displayProducts(data);

searchInput.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    'Todas',
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cat">${cat}</span>
    `
    )
    .join('');

  categoriesContainer.addEventListener('click', (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === 'Todas'
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

setCategories();
