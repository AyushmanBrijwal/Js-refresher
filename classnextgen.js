/*class Model {
  constructor(){
    this.modelno = 'R8';
  }
  printModel(){
    console.log(this.modelno);
  }
} */

class Model {
  modelno = 'R8';
 
  printModel= () => {
    console.log(this.modelno);
  }
}

/*const dog = new Dog();
dog.printGender(); */

//  class Car extends Model {
//   constructor(){
//     super(); /*added to create a super constructor */
//     this.brand = 'Audi';
//     this.modelno = 'A9'; /* its given priority */
//   }
//   printBrand(){
//     console.log(this.brand);
//   }
// } 

class Car extends Model {
  
   
    brand = 'Audi';
    modelno = 'A9'; /* its given priority */
  
  printBrand = () => {
    console.log(this.brand);
  }
}

const car = new Car();
car.printBrand();
car.printModel();
