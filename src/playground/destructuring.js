//const PERSON = {
//  //name:'Andrew',
//  age:26,
//  location:{
//    city:'Philadelphia',
//    temp:92
//  }
//};
//
////const name = PERSON.name;
////const age = PERSON.age;
//
//const {age,name:firstname = 'Anonymous'} = PERSON;
//
//console.log(`${firstname} is ${age}.`);
//
//const {city,temp:temperature} = PERSON.location;
//if(city && temperature){
//  console.log(`It's ${temperature} in ${city}.`);
//}

//const book = {
//  title:"Ego is the Enemy",
//  author:'Ryan Holiday',
//  publisher:{
//    name:'Penguin'
//  }
//};
//
//const {name:publisherName ='Self-Published'} = book.publisher;
//
//console.log(publisherName);


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylavnia', '19147'];

const [,city,state = (true?'New York':'')] = address;

console.log(`You are in ${address[2]}.`);

const item = ['coffee','$2.00','$2.15','$2.75'];

const [product,,,medium] = item;

console.log(`A medium ${product} cost $${medium}`);
