import React, {useEffect, useState} from 'react';
import {type} from "os";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
type Character = {
    id: number
    name: string
    image: string
}
function DetailCard() {

    const [response, setResponse] = useState<Character>()
    useEffect(getAllCharactersFromApi, [])

    const params = useParams()
    const id :string | undefined = params.id

    function getAllCharactersFromApi(){
        axios.get("https://rickandmortyapi.com/api/character/" + id)
            .then((api) => {
                setResponse(api.data);
            })
    }

    return (
        <div>
            <h1>{response?.name}</h1>
            <img src={response?.image}/>
            <h2>{response?.id}</h2>
            <Link to={"/"}>back</Link>
        </div>
    );
}

export default DetailCard;