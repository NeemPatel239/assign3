 const menu = [];

// STEP 1 - Define your page variable

let page = 0;


// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements

const pvsBtn = document.querySelector('#previousMenu');
const nxtBtn = document.querySelector('#nextMenu');
var heading = document.querySelector('h2');
var soup = document.querySelector('#soup h1');
var soupPrice = document.querySelector('#soup .price');
var salad = document.querySelector('#salad h1');
var saladPrice = document.querySelector('#salad .price');
var lighterFare = document.querySelector('#lighterfare h1');
var lighterFarePrice = document.querySelector('#lighterfare .price');
var entree = document.querySelector('#entree h1');
var entreePrice = document.querySelector('#entree .price');

async function getMenu() {

  const res = await 
  fetch ('https://gist.githubusercontent.com/NeemPatel239/bb98c2c09530dc6faad15955abcda9d4/raw/5c91613f56467820b2be81aef27bbe2b68bdf2b4/menu.json')
  const data  = await res.json();
  menu.push(...data);
  display();
}


getMenu();
// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above

function display(todaysmenu){
   todaysmenu = [
heading.textContent = menu[page].title,
soup.textContent = menu[page].soup,
soupPrice.textContent = menu[page].soupPrice,
salad.textContent = menu[page].salad,
saladPrice.textContent = menu[page].saladPrice,
lighterFare.textContent = menu[page].lighterFare,
lighterFarePrice.textContent = menu[page].lighterFarePrice,
entree.textContent = menu[page].entree,
entreePrice.textContent = menu[page].entreePrice
]
return todaysmenu;

}



// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable

function next(){
  if(page === menu.length - 1){
    page = 0;
  }
  else{
  page += 1;
  }
  display();
}


// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale

function previous() {
  if(page === 0){
    page = menu.length-1;
  }
  else{
    page -= 1;
  }
  display();
}

// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.

// fixed it in function.

// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.
nxtBtn.addEventListener('click',next);
pvsBtn.addEventListener('click',previous);

// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.
init();