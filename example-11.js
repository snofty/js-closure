function dbMgr(obj,display){
    console.log('saving for',obj.name);
    setTimeout(function(){
        var id = Math.random()*6;
        display(id);
    }, 5000)
}

dbMgr({name:'snofty'},function(parentKey){
    console.log(parentKey);
});