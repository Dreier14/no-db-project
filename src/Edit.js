import React, {Component} from 'react';

class Edit extends Component{
    constructor(props){
     super(props)
     this.state={
         edit: false,
         gender:"",
         name: "",
         age: "",
         occupation: "",
         catchphrase: "",
         photo:"",
         
     }

    }
    componentDidMount(){
        let {id, gender, name, age, occupation, catchphrase, photo} = this.props.childProps.character;
        this.setState({id, gender, name, age, occupation, catchphrase, photo})
        

        console.log(this.props)
    }
    componentWillReceiveProps(props){
        console.log("props",props)
    }
    edit=()=>{ 
        this.props.editCharacter(this.state) 
        this.setState({edit:false})

    }
render(){
    return(
        <div>
        {!this.state.edit ? 
        <button className ="Change-Me" onClick={()=>this.setState({edit:true})}> Change My Stats</button>
        :<div>
        <input className="input" value={this.state.name} onChange = {(event)=>this.setState({name:event.target.value})}/>
        <input className="input" value={this.state.gender} onChange = {(event)=>this.setState({gender:event.target.value})}/>
        <input className="input" value={this.state.age} onChange = {(event)=>this.setState({age:event.target.value})}/>
        <input className="input" value={this.state.occupation} onChange = {(event)=>this.setState({occupation:event.target.value})}/>
        <input className="input" value={this.state.catchphrase} onChange = {(event)=>this.setState({catchphrase:event.target.value})}/>
        <input className="input" value={this.state.photo} onChange = {(event)=>this.setState({photo:event.target.value})}/>
        <button className ="Change-Me" onClick ={()=> this.edit()}> Update </button>
        </div>
        }
        </div>

   
   
    )   
}
}

export default Edit