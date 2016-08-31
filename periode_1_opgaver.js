var names = ["kurt","ole","ib"];


function myforEach(arr,callback){
    for(var i =0; i < arr.length; i++){
        callback(arr[i]);
    }
}

function myFilter(arr,callback){
    for(var i =0; i < arr.length; i++){
        if(arr[i].length <= 3) {
            callback(arr[i]);

        }
    }
}

function myMap(arr,callback){
    for(var i =0; i < arr.length; i++){
        callback(arr[i].toUpperCase());
    }
}

console.log("opgave 2.1")
myforEach(names,function(name){
    console.log(name);

});

console.log("opgave 2.2")
myFilter(names,function(name){
    console.log(name);

});

console.log("opgave 2.3")
myMap(names,function(name){
    console.log(name);

});

function myforEach2(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i]);
    }
}

function myFilter2(callback){
    for(var i =0; i < this.length; i++){
        if(this[i].length <= 3) {
            callback(this[i]);

        }
    }
}

function myMap2(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i].toUpperCase());
    }
}

Array.prototype.myforEach = myforEach2;
Array.prototype.myFilter = myFilter2;
Array.prototype.myMap = myMap2;

console.log("opgave 3.1")
names.myforEach(function(name){
    console.log(name);

});

console.log("opgave 3.2")
names.myFilter(function(name){
    console.log(name);

});

console.log("opgave 3.3")
names.myMap(function(name){
    console.log(name);

});

console.log("opgave 4.1")

var a = [1,2,3];
var b = [1,2,3];


function handleNumArrays1(a, b, callback){
    var array = [];
    for(var i =0; i < a.length; i++){
        array.push(a[i] + b[i]);
    }
    callback(array);
}




handleNumArrays1(a,b,function(res){
    console.log(res.join(","));
})

console.log("opgave 4.2")
function handleNumArrays2(a, b, callback){
    var number = 0;
    for(var i =0; i < a.length; i++){
        number += a[i] + b[i];
    }
    callback(number);
}




handleNumArrays2(a,b,function(res){
    console.log(res);
})

console.log("opgave 4.3")
function handleNumArrays3(a, callback){
    var array = [];
    for(var i =0; i < a.length; i++){
        array.push(a[i] * 10);
    }
    callback(array);
}




handleNumArrays3(a,function(res){
    console.log(res.join(","));
})
