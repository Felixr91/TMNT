//make sure you have the same data in your array
//id's are usually created for you and they are usually something long and crazy. In a string format.

//why the forloop was created: developers would sometimes forget to add an incrementer and create infinite loops... 

//The premise for all programming is loops and conditionals.

//We reference the DOM with the word 'document'
//purple cubes are methods which are just functions!!!!!!!!!!!!!!!!!!
//appElem is the JS version of an HTML element.

/*
let appElem = document.getElementById("app"); //hard way. You will eventually use tools that will make your life easier. 

for (let i = 0; i < characters.length; i++) {
  let character = characters[i]; //you're going to do this every time. take an 's' off and name a variable. Generally the array has an "s" at the end and the individual does not. 
  //computers can only look at a single line at a time. 
  console.log(character.name);
  appElem.innerText = character.name;//just shredder appears in html because loop replaces the inner text with each iteration. += will make all appear but no spaces.

}

//The above isn't good. You want to build the content all at once and then send it all over. 

let appElem = document.getElementById("app");
let charactersTemplate = '';
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  charactersTemplate += character.name
}
appElem.innerText = charactersTemplate
*/
//Now we want to make a button

let characters = [{
  id: 44,
  name: "Leo",
  favFood: "Pizza",
  favColor: "blue",
  img: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/teenage-mutant-ninja-turtles/characters/leonardo-character-web-desktop.png?height=0&width=480&matte=true&crop=false"
}, {
  id: 687,
  name: "Mikey",
  favFood: "Pizza",
  favColor: "orange",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 55,
  name: "Donny",
  favColor: "purple",
  favFood: "Pizza",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 16,
  name: "Ralph",
  favColor: "red",
  favFood: "Pizza",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 1,
  name: "Splinter",
  favColor: "brown",
  favFood: "Garbage",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 66,
  name: "Shredder",
  favColor: "steelblue",
  favFood: "Turtle Soup",
  img: "https://vignette.wikia.nocookie.net/tmnt/images/0/09/TMNT_Demon_Shredder.jpg/revision/latest?cb=20101015233405&path-prefix=de"
}]

// let position = 0
// while (position < characters.length) {
//   console.log(characters[position].name)
//   position = position + 1
// }

//blocking
//DOM

let appElem = document.getElementById("app") //create variable equal to <div> in HTML with class of "app"
let charactersTemplate = ''//create an empty string variable

for (let i = 0; i < characters.length; i++) { //create a loop through the array
  let character = characters[i] //for every iteration obtain the name of the character //Next-create a template for a button
  charactersTemplate += ` 
    <div class="character">
      <button onclick="drawCharacterInfo(${character.id})">${character.name}</button>
    </div>
  ` //Create a button with the iterated name of the character and create an onclick property that will run a function called drawCharacterInfo
}
//Now all the divs that were created will get moved to the HTMl of the page
appElem.innerHTML = charactersTemplate

//This function creates all the info for the character dialogue
//The parameter is the id # of the character button being clicked
function drawCharacterInfo(id) {
  //unnecessary console.log
  //create a variable called character. This variable is set it to the id of parameter. It will loop through and find the character with the corresponding id.
  let character = characters.find(c => c.id == id)
  //Here we target a div where we will display the generated sentence.
  document.getElementById("character-info").innerHTML = `
    <div class="character-info" style="color: ${character.favColor}">
      <p> <img src="${character.img}" width="60"/>  Hello my name is ${character.name} my favorite food is ${character.favFood}</p>
    </div>
  `//We then change the color of the innerHTML to the character's favorite color.
  //Then we insert an image and set its width to 60.
  // Following that we start the sentence and insert "character.name" and "favorite.food" into the sentence.
}


//This console.log is unnecessary
  /*console.log("Do I have the id: ", id)*/
