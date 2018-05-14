import React, {Component} from 'react';
import Edit from './Edit'

export default class View extends Component{
    render(){
        return(
            <div className = {this.props.character.favorite === "No" ? "characters" : "charactersFavorite"}>
            <h2>{this.props.character.name}</h2>
            <h3>{this.props.character.age}</h3>
            <h4>{this.props.character.occupation}</h4>
            <h4> {this.props.character.catchphrase}</h4>
            <h4>{this.props.character.gender}</h4>
            <img className = "view" src={this.props.character.photo} alt=""/><br/>
            <button onClick={()=> this.props.deleteCharacter(this.props.character.id)} className="delete-this">Delete This</button><br/>
            <Edit childProps = {this.props} editCharacter = {this.props.editCharacter}/>
            
            </div>
        )
    }
}