console.log('connected')

// grab all the elements on the page with the class 'favorite'
let favorites = document.querySelectorAll('.favorite')
console.log(favorites)

// change the style of these elements by adding a new class 
for (let favorite of favorites) {
    favorite.classList.add('selected')
}

// grab the element with id of main
const mainContainer = document.querySelector('#main')
console.log(mainContainer)

// build an element and add it inside the main container
let titleEl = document.createElement('h2')
// create text to put inside the new element
let text = document.createTextNode("It's hard to choose just one favorite")
// add the text as a child of the new element (by default appendChild goes last)
titleEl.appendChild(text)
// append the new element with text to the main container before all its existing child elements
mainContainer.prepend(titleEl)