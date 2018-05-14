import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import NewCharacter from "./NewCharacter"
import View from "./View"
import MainLogo from "./MainLogo"





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      yourCharacter: '',
      characters: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.read = this.read.bind(this);
    this.addCharacter = this.addCharacter.bind(this);
    this.editCharacter = this.editCharacter.bind(this);
  }

  componentDidMount(){
    this.read()
  }

  getCharacter(){
    axios.get(`/api/getcharacter/${this.state.yourCharacter}`).then(response =>{
      this.setState({
        characters:response.data.list
      })
    })
  }
  read(characters){
    axios.get(`/api/allcharacters`, characters).then(characters =>{console.log(characters)
      this.setState({characters: characters.data })
    })
  }
  addCharacter(param){console.log(param)
    axios.post(`/api/charactersadded`, param).then(response =>{ 
      console.log(response.data)
      this.setState({characters:response.data
      })}).catch((error)=> console.log(error))
     
  }

  deleteCharacter(id){
    axios.delete(`/api/deletecharacters/${id}`).then(response => {
      this.setState({characters:response.data})
    });
  }

  editCharacter(id){ console.log(id)
    axios.put(`/api/editcharacters/`, id).then(response=>{
      this.setState({characters: response.data})
      
    })
  }

  handleChange(val){
    if(val !== 'Default'){
      this.setState({
        yourCharacter: val
      }, this.getCharacter, this.read)
    };
  }


  
  render() {

    let view = this.state.characters.map((element , index) => {
      return (<View key = {element.id} character={element} deleteCharacter={this.deleteCharacter} editCharacter={this.editCharacter} read={this.read}/>)
    } )
    return (
      <main className ="App">
        <header className = "App-Header">
        <span className = "input"><NewCharacter addCharacter={this.addCharacter}/>
        </span>
        <span className = "content">
        <div>
        <h1 className = "App-Name">
        <b>Trailer Park Boys Character Creator</b>
        </h1>
        <img className = "TPB" src = "https://pa1.narvii.com/6120/6e0ed9ef09d8369b05f1e97ea7bea49a6b73a928_hq.gif"/>
        <h1 className = "Motto">
        <i>Welcome to Sunnyvale</i>
        </h1>
        </div>
        </span>
        </header>
        <div className = "body">
        <div className = "body2"></div>
        <div className = "search-bar">
        {view}
        </div>
        <footer>
        <Main-Logo><h1><b><i> Trailer Park Boys Series </i></b></h1></Main-Logo>
        <img className = "TPB" src = "https://ia.media-imdb.com/images/M/MV5BOTA0NTAwMTc1MF5BMl5BanBnXkFtZTgwODk2NjY0ODE@._V1_.jpg"/>
        </footer>
        <div className ="body3">{" "}</div>
        </div>
      </main>
    );
  }
}
export default App;
