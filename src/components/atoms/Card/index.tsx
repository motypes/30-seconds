import * as React from 'react';
import glamorous, {Li} from 'glamorous';
import {Card} from '../../types';
interface Props {
    card: Card;
    backgroundColor?: string;
}

const Card = glamorous.ul<{backgroundColor?: string}>({
    color: 'black',
    width: '230px',
    height: '320px',
    padding: '0px',
    margin: '0px',
    borderRight: '10px white solid',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column'
}, (props) => ({
    backgroundColor: props.backgroundColor || 'red'
}));

export default ({card, backgroundColor}: Props) => {
    return (
        <Card backgroundColor={backgroundColor}>
            {card.map((word: string) =>
                <Li fontSize="15px" fontWeight="bold" key={word} textAlign="center">{word}</Li>)}
        </Card>
    );
};
