/*Spread operators*/

//for arrays
const mane6 = ['twily', 'pinky', 'applejack'];
const newMane6 = [...mane6, 'flutttershy']; //spread operator used

console.log(newMane6);

//now for objects

const Pony = {
   name: 'Starlight'
};

const newPony = {
  ...Pony,
  breed: 'unicorn'
}

console.log(newPony);

/*Rest operators*/
const filter = (...args) => {
  return args.filter(pon => pon === 'Twi');
}

console.log(filter('Twi', 'aj', 'Rd'));
