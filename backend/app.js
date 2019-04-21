//load libraries and modules...
const express = require('express');

// Creating instance and express..
const app = express();

// Load the data into the pokemon.
const pokemon = require('./pokemon_data.json');

// CallBack function which get executed when path (api/pokemon) is matched..
app.get('/api/pokemon/:id',(req,res)=>{
  if(!pokemon[req.params.id]){
    res.status(404).send({error : "you entered pokemon was not found"});
    //returning router....
    return;
  }
  var results = {
    "pokemon" : {
      //id : pokemon[req.params.id],
      id : Number(req.params.id),
      name : pokemon[req.params.id].name,                      
      sprite : pokemon[req.params.id].sprite
    }
  }
  //sending responce in json formate
  res.send(results);
})

app.get('/*', (req,res)=>{
  res.status(404).send({erroe : "please, enter the valid url"});
})
app.listen(8006, () =>{
  console.log("listening on port 8006");
});