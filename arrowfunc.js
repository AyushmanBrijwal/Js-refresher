/*function printCar(car){
  console.log(car);
} */

/*const printCar = (car) => {
  console.log(car);
}; *//* same as above func */

/*const printCar = car => { 
  console.log(car);
};*/ /* same as above func */

const printCar = () => {
  console.log('Audi');
}; /* same as above func */

const printMyCar = (car, age) => { /*for multiple args we need parenthesis*/
  console.log(car,age);
}

const Divide = (number) => {
  return number / 2;
}

console.log(Divide(2));
/* or */

const Multiply = num =>  num* 3;

console.log(Multiply(3));

/*printCar('Audi');*/
printCar();
printMyCar('Audi', 10)
