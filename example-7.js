function person(name){
    return {
        greet: function(){
            console.log('hello from '+name);
        }
    }
}

let alex = person('alex');
alex.greet();
console.log(alex.name);
console.log(name);