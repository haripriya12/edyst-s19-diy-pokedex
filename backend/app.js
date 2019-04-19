//load libraries and modules...
const express = require('express');

// Creating instance and express..
const app = express();

// Load the data into the pokemon.
const pokemon = require('./pokemon_data.json');

// CallBack function which get executed when path (api/pokemon) is matched..
app.get("/api/pokemon/:id",(req,res)=>{
  if(!pokemon[req.params.id]){
    res.status(404).send({error : "you entered pokemon was not found"});
    //returning router....
    return;
  }
  const results = {
    "pokemon" : {
      //id : pokemon[req.params.id],
      id : req.params.id,
      name : pokemon[req.params.id].name,                      
      sprite : pokemon[req.params.id].url
    }
  }
  //sending responce in json formate
  res.send(results);
})
app.listen(8006, () =>{
  console.log("listening on port 8006");
});