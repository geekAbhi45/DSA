
const employees = [
    { id: 1, name: "Amit", department: "IT", salary: 60000, isActive: true, city: "Noida" },
    { id: 2, name: "Rahul", department: "HR", salary: 40000, isActive: false, city: "Delhi" },
    { id: 3, name: "Priya", department: "IT", salary: 80000, isActive: true, city: "Noida" },
    { id: 4, name: "Neha", department: "HR", salary: 50000, isActive: true, city: "Delhi" },
    { id: 5, name: "Vikas", department: "Finance", salary: 100000, isActive: true, city: "Bengaluru" },
    { id: 6, name: "Riya", department: "IT", salary: 70000, isActive: false, city: "Bengaluru" },
    { id: 7, name: "Karan", department: "Finance", salary: 90000, isActive: true, city: "Noida" }
];


const activeEmployees=employees.filter((value)=>{
   return value.isActive== true
})

// console.log(activeEmployees)

// console.log(employees.map(value=>value.name))
// console.log(employees.reduce((highest, emp) => emp.salary > highest.salary ? emp : highest))
// console.log(employees.reduce((acc, emp) => acc + emp.salary, 0))
// console.log(employees.filter((emp) => emp.salary > 70000))

// console.log(employees.sort((a,b) =>b.salary -a.salary))
const res=Object.groupBy(employees, emp => emp.department);
console.log(res)
