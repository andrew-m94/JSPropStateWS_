import axios from 'axios';
import React, { Component } from 'react';


class RequestJoke extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            joke: []
         }
    }

    componentDidMount(){
        this.getJoke();
    }

    async getJoke(){
        let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?');
        this.setState({
            joke: response.data
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>
                    {this.state.joke.setup}
                    {this.state.joke.delivery}
                </h1>
            </React.Fragment>
        );
    }
}
 
export default RequestJoke;