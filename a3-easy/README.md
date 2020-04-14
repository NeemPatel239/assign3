# Assignment 3

## Purpose

This vanilla JavaScript web app displays various daily menus which can be viewed by clicking either the next or previous buttons.  

![Image of app](app.JPG)

## Concepts Learned

To create this "Bun on the Run" menu app the following JavaScript concepts were used:
- variables let vs const
- querySelectors using single and nested tag(which i used for the items and prices)
- function to display output on screen with changing values of every elements using array.
- function to go on next page by click and set condition to not jump over the limit.
- function to go on previous page by click and set condition to not to jump over the limit.
- how to work with addEventListener to use for click and run a respective function for next and previous.
- fixed the values of elements right away upon page load.
- How to set an object array into proper json format.
- How to fetch and store json data from a gist link which contain proper json formated data.
- How to pass that data again in an array with spread operator to not get array in array.

## How I made the web app

1. First I defined a const called menus and assigned it to be an empty array
    ```js
    const menus = []
    ```
    The reason why I did that is because the menus array will eventually be assigned an array of objects where each object represents a daily menu, complete with menu items and prices.

1. Next I declare a page (here currentIndex) variable and set it to 0.
    ```js
    let currentIndex = 0;
    ```
    The reason why I did that is because , this will help me to rotate an objects of array one by one simultaneously during next and previous function.
    

1. Next I defined var heading (Here const menuTitle) to connect the html h2.
    ```js
    const menuTitle = document.querySelector("#menu h2");
    ```
    The reason why I did that is because, It helps me to change the h2 everytime for further number of menu show up and use it for title. 

1. Next I defined a display function with a todaysmenu parameter to display values on screen.
    ```js
    function display(todaysmenu) {
        menuTitle.textContent = todaysmenu.title;
        soup.title.textContent = todaysmenu.soup;
        soup.price.textContent = todaysmenu.soupPrice;
        ...etc...
    }
    ```
    This function displays the current menu.  For exammple, it displays the menu title by Menu 1. From the page variable selection in array. If we set the page variable to 2 it will fetch the Menu 2.

1. Next I defined a function called getJson which will fetch our menus data in JSON format
    ```js
    async function init() {
        const res = await fetch("https://gist.githubusercontent.com/NeemPatel239/bb98c2c09530dc6faad15955abcda9d4/raw/5c91613f56467820b2be81aef27bbe2b68bdf2b4/menu.json");
        const data = await res.json();
        menu.push(...data);
        display(menu[currentIndex]);
    }
    ```
    First I defined a constant called res which will be assigned to json gist link and store the values in it as a string data.
    
    Next I defined a const called data which is assigned to res.json() to store values in json pattern from string.

    Next I inserted that entire array of objects into our menus array by using spread operator with data so e can only get an array instead of array into array.  

    Next I called the function display to display our current menu passing in the argument of our first menu in our array

1.  Next I defined a function called prev which takes no parameter but decrements our currentIndex by 1 then calls our display function
    ```js
    function prev() {
        currentIndex = currentIndex === 0 ? menu.length - 1 : currentIndex - 1;
        display(menu[currentIndex]);
    }
    ```
    The reason I'm manipulating the value of currentIndex is to prevent from jump over and stay in a limit. 

1.  In similar fashion, I also created a function called next with similar logic.
    ```js
    function next() {
        currentIndex = currentIndex === menu.length - 1 ? 0 : currentIndex + 1;
        display(menu[currentIndex]);
    }
    ```

1.  Next I added some click event listeners to both next and previous buttons
    ```js
    previousMenu.addEventListener("click", prev);
    nextMenu.addEventListener("click", next);
    ```
    The reason for adding click event handlers is so that we get result when we click the button instead of getting it right away.

1.  Finally, I initialize the whole webpage like onload processing or initialize the type of object.
    ```js
    init();
    ```

# Reflection
## What is the hardest part of creating this web app?
- To connect the items like soup, price, salad etc. using nested tags but succeed.

## What remaining JS concepts are still kind of foggy?
- use of parameter in its function.

## Deck of cards API (remnant of Assignment 4)
Given the documentation listed here: https://deckofcardsapi.com/ it lists 2 APIs/REST endpoints `Shuffle the Cards` and `Draw a card`.  What would you need to do to draw 1 card?
- shuffle the cards and draw a card with a deck_id.

