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

const str2 = "10";
parseInt(str);

studentNames.filter(function(student){
    return student.firstName = "Gracelyn"
})

const sentence = "My class is amazing";

let newSentence = sentence.split(" ").map(function(str)
{
    if(str.toLowerCase() === "amazing")
    {
        return " full of awesomeness";
    }
    else
    {
        return str;
    }
}).join(" ");

console.log(newSentence);


let fellows = [
    {
        firstName: "James",
        lastName: "McAvoy",
        grade: 65
    },
    {
        firstName: "Jimmy",
        lastName: "Neutron",
        grade: 100
    },
    {
        firstName: "Barbara",
        lastName: "Townsend",
        grade: 4
    },
    {
        firstName: "Nancy",
        lastName: "Norris",
        grade: "77"
    },
    {
        firstName: "Mariana",
        lastName: "Rodriguez",
        grade: "99"
    },
    {
        firstName: "Jose",
        lastName: "Ortiz",
        grade: 73
    },
    {
        firstName: "Issac",
        lastName: "Newton",
        grade: 100
    }
]

// fellows = fellows.filter(function(grade){return grade >= 65}).map(grade => grade += grade / 6)

// console.log(fellows)

fellows.filter(function(grade)
{
    return grade >= 65;
}).map(function(grade)
{
    grade += grade / 6;
})

// console.log(fellows);


const studentGrades = fellows.map(function(student)
{
    return parseInt(student.grade);
}).filter(function(studentGrade)
{
    return studentGrade > 64 && studentGrade < 81;
});

const totalGrade = studentGrades.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
}, 0)

console.log(totalGrade/studentGrades.length);

// previousValue = 0;
// currentValue = 10;

// previousValue = 10;
// currentValue = 20;

// previousValue = 30;
// currentValue = 30;

// previousValue = 60;
// currentValue = 40;

// returned value = 100;