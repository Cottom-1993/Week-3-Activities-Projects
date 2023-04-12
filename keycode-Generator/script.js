const welcomeMessage = document.getElementById("welcome-message");
const keycodeOutput = document.getElementById("keycode-output");

document.addEventListener("keydown", function(event){

    const keycode = event.keycode || event.which;
    const key = event.key;
    const charCode = event.charCode || keycode;



    keycodeOutput.innerHTML = `
    <p>Code: ${keycode}</p>
    <p>key: ${key}</p>
    <p>Char code: ${charCode} </p>
    `;


    welcomeMessage.style.display = "none"; 
})