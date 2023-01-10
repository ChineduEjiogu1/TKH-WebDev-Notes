const menu = [
    {
      name: "Beef Wellington",
      price: 55
    },
    {
      name: "Spaghetti",
      price: 25
    },
    {
      name: "Filet Mingon",
      price: 57
    },
    {
      name: "Risotto",
      price: 20
    },
    {
      name: "fountain soda",
      price: 8
    }
  ]
  
  //1. We want a name to be inputted so we can output how much the bill is to the customer
  function waitPerson(name){
    //2. We want to create an empty array so the items the user ordered, can be saved to be used for later
    let ordered = [];
    //3. We want to make sure that the food that the user ordered is on the menu.
    // menu.forEach((food) => {
    //     ordered.push(food)
    // })
    return function(foodName){
      //4. This function should take 1 param of food name
      //5. Use the find method on the menu array using the food name we got in the param
      //6. Make sure to push the found food into the empty array we created. Saves the order

    //   const findFood = menu.find((food) =>{
    //     ordered.push(food.name);
    //   })


    const foundFood = menu.find(function(food){
        return food.name === foodName;
    });
    
    ordered.push(foundFood);

      return function(){
        //7. we want to return a function that allows the user to finally pay for the bill
        //8. inside the function above, we want to tally the bill using the reduce method. 

        // const total = menu.reduce((accumulator, currentValue) =>
        // accumulator + currentValue.price);

        const total2 = menu.reduce(function(accumulator, currentValue){
            return accumulator + currentValue.price;
        }, 0)

        return `${name}, the total price is ${total2} dollars`;
      }
    }
  }

  const isOrdering = waitPerson("Mike");

  isOrdering("Risotto");
  isOrdering("Filet Mingon");

  const totalBill = isOrdering("fountain soda");

  console.log(totalBill());