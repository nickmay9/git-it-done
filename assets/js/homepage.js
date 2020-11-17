var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

function formSubmitHandler(event) {
    event.preventDefault();
    
    //get value from input element
    var username = nameInputEl.value.trim();

    if (username){
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a Github username.");
    }
}

function getUserRepos(user) {
    //format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
    console.log("outside");
}

userFormEl.addEventListener("submit", formSubmitHandler);