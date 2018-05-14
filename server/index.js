const express = require("express");
const bodyParser = require("body-parser");
const stuff = require("./controllers/character_controller");

const app = express();

app.use(bodyParser.json());


app.get('/api/allcharacters', stuff.read)
app.get('/api/getcharacter/:name', stuff.getCharacter)
app.post('/api/charactersadded', stuff.addCharacter)
app.delete('/api/deletecharacters/:id', stuff.deleteCharacter)
app.put('/api/editcharacters/', stuff.editCharacter)

const PORT = 4000;

app.listen(PORT, () => console.log("Come down to KittyLand on" + PORT));