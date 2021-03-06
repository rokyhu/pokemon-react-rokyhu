import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TypeCard from './TypeCard';

export default function TypeList(props) {

    const [typeUrl] = useState('https://pokeapi.co/api/v2/type');
    
    const [typeList, setTypeList] = useState({
        count: 0,
        next: null,
        previous: null,
        results: []
    });

    useEffect(() => {
        axios.get(typeUrl)
        .then(res => setTypeList(res.data))
    }, [typeUrl]);

    
    return (
        <>
            <div className="CardNavigation VisibilityHidden">
                <button className="btn">Previous</button>
            </div>
            <div className="CardContainer">
                {typeList.results.map((type) => (
                    <TypeCard key={type.url} type={type} />
                ))}
            </div>
            <div className="CardNavigation VisibilityHidden">
                <button className="btn">Next</button>
            </div>
        </>
    )
}
