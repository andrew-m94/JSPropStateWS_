import React, { Component } from 'react';

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            uniqueId: '',
            superheroName: '',
            primaryAbility: '',
            secondaryAbility: '',
            errors: {
                uniqueId: '',
                superheroName: '',
                primaryAbility: '',
                secondaryAbility: '',
            }
         }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name){
            case 'unique_id':
                errors.uniqueId = event.target.value.length < 0 ? "Please enter Unique Id" : null;
                break;
            case 'superhero_name':
                errors.superheroName = event.target.value.length < 0 ? "Please enter Superhero Name" : null;
                break;
            case 'primary_ability':
                errors.primaryAbility = event.target.value.length < 0 ? "Please enter Primary Ability" : null
                break;
            case 'secondary_ability':
                errors.secondaryAbility = event.target.value.length < 0 ? "Please enter Secondary Ability" : null
                break;
            default:
                break;
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addHeroTable(this.state);
        alert('Hero Added to Array.');
    };

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label for="uniqueId">Unique Id: </label>
                    <input type="text" name="uniqueId" onChange={this.handleChange} value={this.state.uniqueId} /><br/>
                </div>
                {this.state.errors.uniqueId ? <p style={{color:'red'}}>{this.state.errors.uniqueId}</p> : ''}
                <div>
                    <label for="superheroName">Superhero Name: </label>
                    <input type="text" name="superheroName" onChange={this.handleChange} value={this.state.superheroName}/><br/>
                </div>
                {this.state.errors.superheroName ? <p style={{color:'red'}}>{this.state.errors.superheroName}</p> : ''}
                <div>
                    <label for="primaryAbility">Primary Ability: </label>
                    <input type="text" name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/><br/> 
                </div>
                {this.state.errors.primaryAbility ? <p style={{color:'red'}}>{this.state.errors.primaryAbility}</p> : ''}
                <div>
                    <label for="secondaryAbility">Secondary Ability: </label>
                    <input type="text" name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility}/><br/>
                </div>
                {this.state.errors.secondaryAbility ? <p style={{color:'red'}}>{this.state.errors.secondaryAbility}</p> : ''}
                <button type="submit">Submit</button>
            </form>
         );
    }
}
 
export default SuperheroCreateForm;