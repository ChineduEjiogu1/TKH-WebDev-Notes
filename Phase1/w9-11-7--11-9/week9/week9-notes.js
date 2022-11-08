let i = 5;

function recycle(num)
{
    console.log(num);
    let i = num;
    num = i - 1;
    console.log(num)
    if (num >= 1)
    {
        console.log(num);
        return recycle(num);
    }

    if (num == 0)
    {
        console.log(num)
        return num;
    }
}

console.log(recycle(i));


function exponential(baseNum, exponent)
{
    let total = baseNum;

    if(exponent == 0 || exponent == 1)
    {
        return total;
    }
    // decrement exponent
    exponent = exponent - 1;
    
    console.log(`basenum:${baseNum} exponent:${exponent}`)
    return baseNum * exponential(baseNum, exponent);
}

const num = 8;
const expo = 4;

console.log(exponential(num, expo))