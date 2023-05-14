import React, {ChangeEvent, useEffect, useState} from 'react';
import GalleryCard from "./GalleryCard";
import axios from "axios";

type Character = {
    id: number
    name: string
    image: string

}
type Props = {
    characters: Character[]
}
function CharacterGallery(props: Props) {

    const [response, setResponse] = useState<Character[]>([])
    const [searchTerm, setSearchTerm] = useState<string>(" ")
    const filteredChars = props.characters.filter((character) => character.name.includes(searchTerm))

    function getAllCharactersFromApi(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then((api) => {
                setResponse(api.data.results);
            })
    }

    useEffect(getAllCharactersFromApi, [])


    function onChangeInputUser(event: ChangeEvent<HTMLInputElement>){
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <input placeholder={"search..."} onChange={onChangeInputUser}/>
            <button onClick={getAllCharactersFromApi}>get chars</button>
        <div>
            {props.characters.map(thisCharacter => <GalleryCard key={thisCharacter.id} character={thisCharacter}/>)}
        </div>
        </>
    );
}

export default CharacterGallery;