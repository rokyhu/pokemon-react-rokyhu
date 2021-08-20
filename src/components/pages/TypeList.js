import React from 'react';
import axios from 'axios';
import Type from './Type';

export default class TypeList extends React.Component {
    state = {
        typeList: {
            count: 0,
            next: null,
            previous: null,
            results: []
        }
      }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res => this.setState({typeList: res.data}))
    }
    
    render() {
        return (
            <>
                <div className="CardNavigation">
                    <button className="btn">Previous</button>
                </div>
                <div className="CardContainer">
                    {this.state.typeList.results.map((type) => (
                        <Type key={type.url} type={type} />
                    ))}
                </div>
                <div className="CardNavigation">
                    <button className="btn">Next</button>
                </div>
            </>
        )
    }
}
