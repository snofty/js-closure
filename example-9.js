for (var i = 1; i <= 5; i++) {
    (function(index){
        setTimeout(function timer () {
            console.log(index);
          }, index * 1000);
    })(i);
  }