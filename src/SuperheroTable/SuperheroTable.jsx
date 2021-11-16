import React from 'react';

function SuperheroTable(props) {
    return ( 
        <div>
            <table>
                <thead>
                <tr>
                <th>Unique Id</th>
                <th>Superhero Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
                </tr>
                </thead>
                <tbody>
                    {props.heroTable.map(superheroes => (
                        <tr key={superheroes.uniqueId}>
                            <td >{superheroes.uniqueId}</td>
                            <td >{superheroes.superheroName}</td>
                            <td >{superheroes.primaryAbility}</td>
                            <td >{superheroes.secondaryAbility}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}

export default SuperheroTable;