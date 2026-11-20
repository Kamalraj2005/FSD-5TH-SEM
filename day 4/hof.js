const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const multipleofThree =arr.map((data)=>data*3);

console.log(multipleofThree);

const divisibleofThree = arr.filter((data)=>data%3===0);

console.log(divisibleofThree);

const firstDivisibleofThree = arr.find((data)=>data%3===0);

console.log(firstDivisibleofThree);

const sumOfArr = arr.reduce((data,acc) => {
    acc += data;
    return acc;
}, 0);

console.log(sumOfArr);
