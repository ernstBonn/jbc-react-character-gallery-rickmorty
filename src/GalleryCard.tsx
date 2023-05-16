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
            <a href={"character/" + props.character.id.toString()}><img src={props.character.image} alt={props.character.name}/></a>
            <p>{props.character.id}</p>
        </div>
    );
}

export default GalleryCard;