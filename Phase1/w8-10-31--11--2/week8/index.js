

let arr2 = [
    {
        firstName: "Jacky",
        lastName: "Peng"
    },
    {
        firstName: "Gracelyn",
        lastName: "Prajna"
    }
];

arr2[1]["firstName"];
arr2[1].lastName;

for(let i = 0; i < arr2.length; i++)
{
    console.log(arr2[i].firstName);
    console.log(arr2[i].lastName);
}

const operator = "add";

switch(operator)
{
    case "add":
        console.log(1 + 1);
        break;
    case "subtract":
        console.log(1 - 1);
        break;

    case "multiply":
        console.log(1 * 1);
        break;

    case "divide":
        console.log(1 / 1);
        break;

    default:
        console.log("Sorry your operator is not supported yet.");
        break;
}

