//------------Task1----------------

let cars = [
    {
      "color": "purple",
      "type": "jeep",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "sedan",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]

//Array Find----------
// let car = cars.find(car => car.color === "red");
// console.log(car);

//Array Map---------------
// let sizes = cars.map(car => {
//     if (car.capacity <= 3){
//       return "small";
//     }
//     if (car.capacity <= 5){
//       return "medium";
//     }
//     return "large";
//   });
//   console.log(sizes)

//Array foreach-----------
// cars.forEach(car => {
//     car['size'] = "large";
//     if (car.capacity <= 5){
//       car['size'] = "medium";
//     }
//     if (car.capacity <= 3){
//       car['size'] = "small";
//     }
//    });

//Array some--------------
// cars.some(car=>car.color==="red"&&car.type==="sedan");

//Array every-------------
// cars.every(car=>car.capacity>=4);






