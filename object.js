let person ={
    name:"John",
    age:20,
    gender:"Female",
    hobby: function (activity){
        return `My name is ${this.name} and i love ${activity}`   
     }
    //property whose value is a function

}
console.log(person.hobby("codeHive"));
// person.country="India"
// person["nationality"]="Indian"
// console.log(person);
// let student=Object.create(person);
// student["name"]="Wanda"
// student.age=30
// console.log(student);

