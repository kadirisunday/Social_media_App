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
        msg.innerHTML="";
        acceptData();
    }
};

// accepting data from input and storing them in an object
let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

//  create a post
let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
    
    `;
    input.value = "";
}

// delete a post

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

// edit a post
let editPost = (e) =>{
    // The parent of the span is the div. So, we write parentElement twice so that we can jump from the edit icon to the div and target it directly to remove it.Then, whatever data is inside the post, we bring it back on the input field to edit it.

    let editPost = (e) => {
        input.value = e.parentElement.previousElementSibling.innerHTML;
        e.parentElement.parentElement.remove();
    }
}