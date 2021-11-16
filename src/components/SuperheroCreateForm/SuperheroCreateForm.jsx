import React, { Component } from 'react';

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form action="" method="post">
            <label for="unique_id">Unique Id: </label>
            <input type="text" name="unique_id" /><br/>
            <label for="superhero_name">Superhero Name: </label>
            <input type="text" name="superhero_name" /><br/>
            <label for="primary_ability">Primary Ability: </label>
            <input type="text" name="primary_ability" /><br/>
            <label for="secondary_ability">Secondary Ability: </label>
            <input type="text" name="secondary_ability" /><br/>
            </form>
         );
    }
}
 
export default SuperheroCreateForm;