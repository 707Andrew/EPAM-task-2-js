const m = prompt("Enter first natural number");
const n = prompt("Enter second natural number");
let m2 = parseInt(m);
let n2 = parseInt(n);
let mult = 1;
let array = [];
for(let i = m2; i <= n2; i++){
    if(i % 2 !== 0){
        array.push(i);
    }
}

for(let i = 0; i < array.length; i++){
    mult *= array[i];
}
console.log(mult)

alert("Result: " + mult)