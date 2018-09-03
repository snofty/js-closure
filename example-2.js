function init() {
    name = "Mozilla"; // name is a local variable created by init
    return function displayName() { // displayName() is the inner function, a closure
        console.log(name); // displayName() uses variable declared in the parent function    
    }
}
var returnFun = init();
name = "Modified";
returnFun();