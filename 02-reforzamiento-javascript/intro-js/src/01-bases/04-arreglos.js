console.log('Reforzando Javascript...');

//const arr = new Array(100);

const arr = [1, 2, 3, 4, 5];
//arr.push(1);
//arr.push(2);
//arr.push(3);
//arr.push(4);

console.log(arr);

let arr2 = [...arr, 5];
//arr2.push(5);

console.log(arr2);

const arr3 = arr2.map(function(num){
    return num * 2;
});

console.log(arr3);
