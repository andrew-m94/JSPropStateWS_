import React, { Component } from 'react';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';
import SuperheroTable from './SuperheroTable/SuperheroTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.heroArray =  {
            superheroes:  []
        }
    }

    addHeroTable = (newHero) => {
        this.heroArray.superheroes.push(newHero);
        this.setState({})
    }

    render() {
        return(
            <div>
                <SuperheroCreateForm addHeroTable={this.addHeroTable} />
                <SuperheroTable heroTable={this.heroArray.superheroes} />
            </div>
        )
    }
}
 
export default App;