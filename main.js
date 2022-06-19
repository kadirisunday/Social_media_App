let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// creating a submit event listener for the form

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("Button clicked");

    formValidation();
})

let formValidation = () => {
    // creating an if else statement to prevent userrs from submitting blank input
    if (input.value === "") {
        msg.innerHTML = "post cannot be blank";
        console.log("failure");
    }else{
        console.log("success");
        msg.innerHTML=""
    }
};