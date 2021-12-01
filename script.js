//------------Task1----------------

// let cars = [
//     {
//       "color": "purple",
//       "type": "jeep",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "sedan",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     }
// ]

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


//--------------Task2----------------

class Student{
    constructor(Id,name,surname,age){
        this.Id=Id;
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
}



class Group{
    constructor(GroupName,studentCount,arr=[]){
        
        this.GroupName=GroupName;
        this.studentCount=studentCount;
        this.arr=arr
    }
    
    
    addStudent(student){
        
        if((this.arr.length<this.studentCount)){

            

            var a=this.arr.find(x=>x.Id===student.Id) 
            if(a==undefined){
            this.arr.push(student)
            
            }
            else{
                console.log("Please enter correct Id");
            }
        }
        else{
            console.log("The number of students is large");
        }
    }
} 
const user2=new Student(2,"Habib","Ibrahimov",25)
const user3=new Student(2,"Habib","Ibrahimov",25)
const user4=new Student(3,"Habib","Ibrahimov",25)


const grup=new Group("P",3)
grup.addStudent(user2);
grup.addStudent(user3)
grup.addStudent(user4)
console.log(grup.arr)


