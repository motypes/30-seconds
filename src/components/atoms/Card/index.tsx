import * as React from 'react';
import glamorous, {Li} from 'glamorous';
import {Card} from '../../utils';
// import data from './data';

interface Props {
    card: Card;
    backgroundColor?: string;
}

const Card = glamorous.ul<{backgroundColor?: string}>({
    color: 'black'
}, (props) => ({
    backgroundColor: props.backgroundColor || 'red'
}));

export default ({card, backgroundColor}: Props) => {
    return (
        <Card backgroundColor={backgroundColor}>
            {card.map((word: string) => <Li marginBottom="5px" key={word}>{word}</Li>)}
        </Card>
    );
};
