const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: 39.99,
    img: './images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

// Wat if a new item is added with some other category for example dinner? It will only be visible when button with id 'all' is pressed. 
// A new button with the name of the category should be added dynamically
// For that: 
// First, get only unique categories using 
// Second, iterate over the categories and return buttons
// Third, make sure to select buttons when they are available

// Select the parent of the articles that is section-center
const sectionCenter = document.querySelector('.section-center');

// select the button container
const btnContainer = document.querySelector('.btn-container');

// Create a function to display items dynamically
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
              <img src=${item.img} class="photo" alt="${item.title}">
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  });

  displayMenu = displayMenu.join('');
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  // To get all the unique categories
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        // This means,  if values that is ['all'] does not include items category then add it to the value
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  // console.log(categories);
  const categoryBtns = categories.map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join('');
  // console.log(categoryBtns);
  btnContainer.innerHTML = categoryBtns;

  // Select all the filterBtns
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');

  // Filter items
  filterBtns.forEach(function (btn) {
    // Add event listener to every btn
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset.id);
      // Save the buttons categories into a constant
      const category = e.currentTarget.dataset.id;

      // Return the item which's category matches to the button which is pressed
      const menuCategory = menu.filter(function (item) {
        if (item.category == category) {
          return item;
        }
      });

      // Check if the id of button pressed is 'all' or 'some specific filter'
      if (category === 'all') {
        return displayMenuItems(menu);
      } else {
        return displayMenuItems(menuCategory);
      }
    });
  });
}


// To load items 
window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);
  displayMenuButtons();
})

