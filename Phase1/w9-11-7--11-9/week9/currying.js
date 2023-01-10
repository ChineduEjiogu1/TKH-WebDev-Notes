function shouldIGreet() // setup
{
    console.log(``)
    return function(name) // setup
    {
        console.log(`hello ${name}`);
        // doing something with name

        return function()
        {

        }
    }
}

const iMGoingToGreet = shouldIGreet("Kwame");

iMGoingToGreet();