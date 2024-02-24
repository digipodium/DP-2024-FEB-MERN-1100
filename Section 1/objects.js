const user = { name: 'raju', email: 'raju@mail.com', password: 'raju7654' };

console.log(user.name);

console.log(user.email);

console.log(user['password']);
console.log(Object.keys(user));
console.log(Object.values(user));

user.password = 'khuljasimsim';

console.log(user);
user.address = 'Lucknow';

const smartphone = {
    brand: 'Samsung',
    model : 's24 ultra',
    price : 136000,
    color : ['black', 'blue', 'silver']
};

console.log(smartphone.color[1]);

// replace the 3rd color with 'white'

smartphone.color[2] = 'white';
smartphone.color.push('red')

console.log(smartphone.color);

const phoneList = [
    { brand: 'Samsung', model : 's24 ultra', price : 136000, color : ['black', 'blue', 'silver'] },
    { brand: 'OnePlus', model : 'Nord c3', price : 24000, color : ['grey', 'black'] },
    { brand: 'Vivo', model : 'v7', price : 34000, color : ['red', 'yellow'] },
    { brand: 'Xiaomi', model : 'note 12', price : 56000, color : ['black', 'blue', 'silver'] },
];

console.log(phoneList.length);
console.log( phoneList[0].price );

// find the 2nd color of 3rd phone

console.log(phoneList[2].color[1]);