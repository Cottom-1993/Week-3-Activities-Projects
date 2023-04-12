// Activity 1:

// console.log(document.getElementById("toggleBtn"))

// const toggleBtn = document.getElementById("toggleBtn")
// const toggleImg = document.querySelector("#toggleImg")

// toggleBtn.addEventListener("click", () => {

//     // console.log(toggleImg.style.display)
   

//     if(toggleImg.style.display === "none"){
//         toggleImg.style.display = "block"
//     } else {
//         toggleImg.style.display = "none"
//     }
// })

// Activity 2:

// const imgToChange = document.getElementById("imgToChange");
// const inputImg = document.getElementById("enterImg");
// const changeImgBtn = document.getElementById("changeImgBtn");



// changeImgBtn.addEventListener("click", () => {

//     // console.log(inputImg.value)
//     // console.log(imgToChange.src)
//     imgToChange.src = inputImg.value
    
//     // optional to clear input box
//     inputImg.value = ""

// })

// <!-- Activity 3: Create a heading, button, and input in your HTML. Change the text colour of the heading to whatever colour is typed in the input when the button is clicked -->

// const heading = document.getElementById('heading');
// const colorInput = document.getElementById('color-input');
// const colorButton = document.getElementById('color-button');


// colorButton.addEventListener('click', function() {
//     const color = colorInput.value;
//     heading.style.color = color;

// });

// <!-- Activity 4: Using the event object, get the x and y coordinates of where you click on the page and display the values in a p tag.-->

// const clickLoc = document.getElementById ("clickLoc");

// document.addEventListener("click", (event) => {
//     console.log(event.clientX)
    
//     clickLoc.textContent = `X: ${event.clientX}px   Y:${event.clientY}px`
// })

