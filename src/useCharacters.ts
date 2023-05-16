import {useEffect, useState} from "react";
import axios from "axios";


type Character = {
    id: number
    name: string
    image: string

}
export default function useCharacters() {

    const [response, setResponse] = useState<Character[]>([])

    function getAllCharactersFromApi(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then((api) => {
                setResponse(api.data.results);
            })
    }

    useEffect(getAllCharactersFromApi, [])

    return {response, getAllCharactersFromApi}
}
