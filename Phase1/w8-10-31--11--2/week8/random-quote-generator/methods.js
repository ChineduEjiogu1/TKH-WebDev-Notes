const str = "this is awesome";

console.log(str.slice(5, str.length));

console.log(str.split(" "));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.length);

if(str.toLowerCase() === "this is awesome")
{
    console.log("this really is awesome");
}

const arr = [2, 4, 6, 8];

const newArr = arr.map(function(el){
    return el * 2;
})

console.log(newArr);

let arr2 = [2, 4, 6, 8];
let arr3 = [];

for(let i = 0; i < arr2.length; i++)
{
    arr3.push(arr2[i] * 2);
}

console.log(arr3)

arr3.forEach(function(el)
{
    console.log(el * 2);
})

let studentNames = [
    {
        firstName: "Jacky",
        lastName: "Peng"
    },
    {
        firstName: "Gracelyn",
        lastName: "Prajna"
    }
];

studentNames.forEach(function(student){
    console.log(`${student.firstName} ${student.lastName}`);
});

const newStudentlist = studentNames.map(function(student){
    return `${student.firstName} ${student.lastName}`;
});

console.log(newStudentlist);