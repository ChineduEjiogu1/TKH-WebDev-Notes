const sentence = "The people here is horrible";

const reMadeSentence = sentence.split(" ").map(function(word){
    if (word.toLowerCase() === "is")
    {
        return "are";
    }
    if(word.toLowerCase() === "horrible")
    {
        return "awesome";
    }
    return word;
}).join(" ");

console.log(reMadeSentence);

let array = [1, 2, 3, 4];

for(let i = 0; i < array.length; i++){
    //Access each item in the array
    console.log(array[i]);
  }

  console.log("\n");

  let obj = {x: 1, y: 2, z: 3};
  
  console.log(obj.x);

//   console.log(obj in y);

//   console.log( obj.("y") );

//   console.log(obj > y);

//   someButton.addEventListener("click", function() { "Does something here" });

// const something = () => { "Does code here" }

const word = "ThisIsAString!";

function countString(str){
    let length = 0;
    str.split("").forEach(function(){
        length += 1;
    });

    return length;
}

console.log(countString(word));

const doSomething = () => {
    
}