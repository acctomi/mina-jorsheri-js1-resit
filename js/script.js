fetch("https://official-joke-api.appspot.com/random_joke")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJoke) {
    console.log(myJoke.type);
    var title = document.getElementById('myData');
    var setup_string = document.getElementsByClassName('setup');
    var punchline_string = document.getElementsByClassName('punchline');
    if (myJoke.type == "Undefined") {
      title.innerText = "Random Joke";
    }
    else {  
      title.innerText = myJoke.type + " Joke";
    }
    setup_string[0].innerText = myJoke.setup;
    punchline_string[0].innerText = myJoke.punchline;
  }).catch(function(error) {
    console.log(error.type);
  });
