import React, {Component} from 'react';

class NewCharacter extends Component{
    constructor(){
        super()

        this.state ={
            gender:"",
            name: "",
            age: "",
            occupation: "",
            catchphrase: "",
            photo:"",
            
        }
    }
    genderChange(val){
        this.setState({
        gender: val
        })
    }
    nameChange(val){
        this.setState({
        name: val})
    }
    ageChange(val){
        this.setState({
        age: val})
    }
    occupationChange(val){
        this.setState({
        occupation: val})
    }
    catchphraseChange(val){
        this.setState({
        catchphrase: val})
    }
    photoChange(val){
        this.setState({
        photo: val})
    }
    clearAllFields(){
        this.setState({
            gender:"",
            name: "",
            age: "",
            occupation: "",
            catchphrase: "",
            photo:"",
        })
    }
    render(){
        let {gender, name, age, occupation, catchphrase, photo} = this.state;
        return(
            <div id = "New-Character">
            Gender:<br/>
            <select className = "New" value={this.state.gender} onChange={event => this.genderChange(event.target.value)}>
            <option value = "Default"> Select </option>
            <option value = "Male"> Male </option>
            <option value = "Female"> Female </option>
            </select><br/>
            Name:<br/>
            <input className="input" value={this.state.name} onChange={event => this.nameChange(event.target.value)}/><br/>
            Age:<br/>
            <input className="input" value={this.state.age} onChange={event => this.ageChange(event.target.value)}/><br/>
            Occupation: <br/>
            <input className="input" value={this.state.occupation} onChange={event => this.occupationChange(event.target.value)}/><br/>
            Quote:<br/>
            <input className="input" value={this.state.catchphrase} onChange={event => this.catchphraseChange(event.target.value)}/><br/>
            Upload Photo:<br/>
            <input className="input" value={this.state.photo} onChange={event => this.photoChange(event.target.value)}/><br/>
            <button className='button' onClick={()=>{
            this.props.addCharacter({gender, name, age, occupation, catchphrase, photo}); this.clearAllFields()}}>New Character</button>
            </div>
        )
    }
}

    export default NewCharacter;