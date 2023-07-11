function receivesAFunction(callback){
    callback(); 
}

function returnsANamedFunction(){
    function addition(){
        let x = 2
        let y = 2
    }
    return addition
}

function returnsAnAnonymousFunction(){
    return function(){}
}