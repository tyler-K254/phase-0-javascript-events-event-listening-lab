// document.querySelector("body").addEventListener("click", addingEventListener) 

// function addingEventListener() {
//     alert("I've been clicked")
// }


// function addingEventListener() {
//     alert("I've been clicked")
    
// }
// document.querySelector("body").addEventListener("click", addingEventListener) 

const input = document.getElementById('button');

function addingEventListener(){
    alert("I've been clicked");
    input.addEventListener('click', addingEventListener);
}


