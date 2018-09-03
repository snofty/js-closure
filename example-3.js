function init() {
    make(); 
    make2(); 
}
var counter = 1000;
init();

function make(){
    var counter = 0;
    setInterval(updateTimer,500);
    function updateTimer(){
        //document.getElementById('timerId').innerHTML=(++counter);
        console.log((++counter));
    }
    console.log("end of maker..");
}

function printTimer(){
    console.log((++counter));
}

function make2(){
    setInterval(printTimer,500);
    console.log("end of maker2...");
}