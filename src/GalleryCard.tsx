import React from 'react';

type Character = {
    id: number
    name: string
    image: string

}

type Props = {
    character: Character
}
function GalleryCard(props: Props) {
    return (
        <div>
            <h1>{props.character.name}</h1>
            <img src={props.character.image} alt={props.character.name}/>
            <p>{props.character.id}</p>
        </div>
    );
}

export default GalleryCard;