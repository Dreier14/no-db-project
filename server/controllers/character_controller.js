var characters = [

{   id:1,
    gender:"Gender:Male",
    name:"Ricky",
    age: "Age:30",
    occupation: "Conman",
    catchphrase: "'Gotta learn stuff through denial and error.'",
    photo:"https://i.imgur.com/NtvmDPX.gif",
    favorite: "No"
},
{   id:2,
    gender:"Gender:Male",
    name:"Julian",
    age: "Age:32",
    occupation:"Master Mind Criminal",
    catchphrase: "'Life isn't about getting drunk and eating chicken fingers all the time.'",
    photo:"https://media.giphy.com/media/aOWrdfc6nNdxC/giphy.gif",
    favorite: "No"
},
{   id:3,
    gender:"Gender:Male",
    name:"Bubbles",
    age: "Age:31",
    occupation:"Kitty Tamer",
    catchphrase:"'That is one Nice Kitty.'",
    photo:"https://lh4.googleusercontent.com/-MZqdve1pHkg/Ua8_VDP8aLI/AAAAAAAAEpE/6smdW-4hWWQ/w400-h289-no/Trailer+Park+Boys+GIF+%25285%2529.gif",
    favorite: "No"


},
{   id:4,
    gender:"Gender:Male",
    name:"Mr.Lahey",
    age: "Age:57",
    occupation:"Trailer Park Supervisor",
    catchphrase:"'I am the Liqour.'",
    photo: "https://media1.tenor.com/images/8c13cbb01c9db3a094cdb4d791be82b2/tenor.gif?itemid=8836984",
    favorite: "No"

},
{   id:5,
    gender:"Gender:Male",
    name:"Randy",
    age: "Age:30",
    occupation:"Assistant Trailer Park Supervisor",
    catchphrase:"'Ive got some cheeseburgers.'",
    photo: "https://thumbs.gfycat.com/IlliterateMemorableCurlew-size_restricted.gif",
    favorite: "No"
},  
{   id:6,
    gender:"Gender:Male",
    name:"Ray",
    age: "Age:55",
    occupation:"Truck Driver",
    catchphrase:"'That's the way she goes.'",
    photo:"https://i.redd.it/xlcncm28yo7z.gif",
    favorite: "No"
},
{   id:7,
    gender:"Gender:Female",
    name:"Barb Lahey",
    age: "Age:56",
    occupation:"Trailer Park Owner",
    catchphrase:"'Randy, put a shirt on.'",
    photo:"https://i.pinimg.com/236x/4a/ab/df/4aabdf740f7ddf92d96adb5afca15b76.jpg",
    favorite: "No"

}];

module.exports = {
    addCharacter(req, res) { console.log(req.body)
      const { name, age, occupation, catchphrase , photo, gender } = req.body;
      characters.push({
        id: characters.length + 1,
        gender:gender,
        name: name,
        age: age,
        occupation: occupation,
        catchphrase: catchphrase,
        photo: photo,
        favorite: "No"
      });
      console.log(characters)
      res
        .status(200)
        .json(characters)
    },
    read(req, res) { console.log(characters)
      res.status(200).json(characters);
    },
    getCharacter(req, res) {
      const { name } = req.params;
      let list = characters.filter(element => {
        if (element.name === name) {
          return element;
        }
      });
      res.status(200).json(list);
    },
    deleteCharacter(req, res) {
      const deleteId = req.params.id;
      const deleteIndex = characters.forEach((element, i, arr) => {
        if (element.id == deleteId) {
          characters.splice(i, 1);
        }
      });
      res.status(200).json(characters);
    },
    editCharacter(req, res) { console.log(req.body)
      const editId = req.body.id;

      const {gender, name, age, occupation, catchphrase, photo} = req.body

      const editIndex = characters.forEach((element, i, arr) => {
        if (element.id == editId) {
          return (characters[i].favorite = "Yes");
        }
      });
      let index = characters.findIndex(e=> e.id === editId)
      console.log(index)
      characters[index] = req.body
    

        res.status(200).json(characters);
    }
  };



