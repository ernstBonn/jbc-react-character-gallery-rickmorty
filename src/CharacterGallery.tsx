import React from 'react';
import GalleryCard from "./GalleryCard";

type Character = {
    id: number
    name: string
    image: string

}
type Props = {
    characters: Character[]
}
function CharacterGallery(props: Props) {
    return (
        <div>
            {props.characters.map(thisCharacter => <GalleryCard key={thisCharacter.id} character={thisCharacter}/>)}
        </div>
    );
}

export default CharacterGallery;