//for in loop

const person = {fname:"John", lname:"Doe", age:25};

let text1 = "";
for (let x in person) {
  
  console.log(person[x]);
}



//for of loop

const cars = ["BMW", "Volvo", "Mini"];

let text2 = "";
for (let x of cars) {
//   text2 += x;

  text2 =  text2 + x;
  console.log(text2);
}


//forEach loop

let students = ['John', 'Sara', 'Jack'];

students.forEach((item)=>{
	console.log(item);
})

