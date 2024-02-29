const nums = [3, 7, 9, 4, 6, 1, 2];

// store the square of each number in a new array
const arr1 = [];

for(let i of nums){
    // console.log(i);
    arr1.push(i**2);
}

console.log(arr1);

const result = nums.map( ( n ) => { return n**2 } );
console.log(result);

const prices = [ '$567.23', '$21874.989', '$888.90', '$7257.2482' ];
//  [ 567, 21874, 888, 7257 ]

console.log(parseInt('$567.23'.slice(1)));

const numPrices =  prices.map( ( p ) => { return parseInt(p.slice(1)) } )
console.log(numPrices);

const disounted = numPrices.map( (p) => { return parseInt(p*0.9) } );
console.log(disounted);

const nums2 = [4, 87, 26, 284, 270, 963];

const oddNums = nums2.filter( ( n ) => { return n%2!==0 } );
console.log(oddNums);

const prices2 = [12000, 670, 4500, 3500, 4600, 240];

const budgetPrice = prices2.filter( (p) => { return p>500 && p<4000 });

console.log(budgetPrice);

const phoneList = [
    { brand: 'Samsung', model: 'Galaxy s21', price: 56000, color: ['white', 'blue', 'red'] },
    { brand: 'Mi', model: '10 Pro', price: 25000, color: ['silver', 'black'] },
    { brand: 'Vivo', model: 'v7', price: 23000, color: ['grey', 'blue', 'black'] },
    { brand: 'Oppo', model: 'neo 11', price: 35900, color: ['black', 'red'] },
    { brand: 'Samsung', model: 'J7', price: 17500, color: ['gold', 'black'] }
];

const budgetPhones = phoneList.filter( ( phone ) => { return phone.price < 30000 } );
console.log(budgetPhones);

const samsungPhones = phoneList.filter( ( phone ) => { return phone.brand === 'Samsung' });
console.log(samsungPhones);
// filter all phones with blue color

console.log( ['a', 'b', 'c'].includes('b') );

const bluePhones = phoneList.filter( (phone) => { return phone.color.includes('blue') } );

console.log(bluePhones);