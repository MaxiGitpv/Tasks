// sample array of students
const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 24,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 22,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 20,
      course: "Accounting",
    },
    {
      name: "Ryan Jhon",
      lastname: "Ray",
      age: 23,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 20,
      course: "Financial Management",
    },
  ];
  
  // Write your code here!
  
  for (let i =0; i < students.length; i++){
    console.log(students[i].name)
  }

 students.forEach(function(student, index){
  console.log(student.age)
 })

 students.forEach( (student, index, students)=> {
  console.log(student.course) // cursos
  console.log(index)
  console.log(students)
 })

 const fullnames = []
students.forEach((student) => {
  
    fullnames.push({fulname: student.name + ' ' + student.age,
    age: student.age,
    title: `${student.name} + ${student.course}`})

  
})
console.log(fullnames)


const result = students.map((student) => {
  console.log(student)
  return {fullname: student.name + ' ' + student.lastname,
          ...student  }
})
console.log(result)