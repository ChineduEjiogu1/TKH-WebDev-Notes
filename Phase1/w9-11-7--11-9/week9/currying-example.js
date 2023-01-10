function calculator(operator)
{
    switch(operator)
    {
        case "add":
            return function(num1, num2)
            {
                return num1 + num2;
            }
        
            case "subtract":
                return function(num1, num2)
                {
                    return num1 - num2;
                }
            
            default:
                console.log("Ay you are not using the right operator");
                break;
    }
}

const add = calculator("add")
const subtract = calculator("subtract");

console.log(add(10, 5));
console.log(subtract(20, 1));