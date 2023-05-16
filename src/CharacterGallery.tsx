import React, {ChangeEvent, useEffect, useState} from 'react';
import GalleryCard from "./GalleryCard";
import axios from "axios";
import UseCharacters from "./useCharacters";
import useCharacters from "./useCharacters";

type Character = {
    id: number
    name: string
    image: string

}

function CharacterGallery() {

    const {response,getAllCharactersFromApi} = useCharacters()

    const [searchTerm, setSearchTerm] = useState<string>("")
    const filteredChars = response.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()))

    function onChangeInputUser(event: ChangeEvent<HTMLInputElement>){
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <input placeholder={"search..."} onChange={onChangeInputUser}/>
        <div>
            {filteredChars
                .map(thisCharacter => <GalleryCard key={thisCharacter.id} character={thisCharacter}/>)}
        </div>
        </>
    );
}

export default CharacterGallery;