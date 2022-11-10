const axios = require("axios");

function searchForPokemon(name)
{
    axios.get("https://pokeapi.co/api/v2/pokemon").then(function(result){
        console.log(result.data.results);
        for(let i = 0; i < result.data.results.length; i++)
        {
            const pokemon = results.data.results[i];
            console.log(pokemon.name.toUpperCase());
        }
    }).catch(function(){
        console.log("Something went wrong");
    })
}

searchForPokemon();