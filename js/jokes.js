fetch("https://official-joke-api.appspot.com/random_ten")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJoke) {
      console.log(myJoke);

      var cardRow = document.getElementsByClassName('row');
      var adjacentLoader = document.getElementsByClassName('loader');

      for (var i = 0; i < 5; ++i){
          cardRow[i].innerHTML = '<div class="col-sm-6 col-md-4 col-lg-3"><div class="card"><div class="joke-detail"><h4 class="type">' + myJoke[i].type + '</h4><div class="setup">' + myJoke[i].setup + '</div><div class="punchline">' + myJoke[i].punchline + '</div></div></div></div>';
      }

  }).catch(function(error) {
    console.log(error.type);
  });
