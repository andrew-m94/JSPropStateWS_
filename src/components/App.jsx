import React, { Component } from 'react';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div>
                <SuperheroCreateForm />
            </div>
        )
    }
}
 
export default App;