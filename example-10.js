var updateClickCount=(function(){
    var counter=0;

    return function(){
     ++counter;
     // do something with counter
     console.log(counter);
    }
})();

updateClickCount();
updateClickCount();
updateClickCount();