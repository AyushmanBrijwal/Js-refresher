//primitive types
const pony = 'Sunny';
const pony2 = pony;

console.log(pony2);

//reference types
const Pony = {
  name: 'Izzy'
};

const secondPony = Pony;
const thirdPony = { //created deep copy
  ...Pony
}

Pony.name = 'Pipp' //expected to be Izzy but due to reference copy its updated
console.log(secondPony);
console.log(thirdPony);
