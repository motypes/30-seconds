import * as React from 'react';
import {Div} from 'glamorous';
import data from './data';

interface Props {
    data: string[][];
    color: string;
}

interface Palleteprops {
    miniWords: string[];
    color: string;
}

console.log('data slice', data[0]);
const Pallete = (props: Palleteprops) => {
    const myStyle = {
        backgroundColor: props.color,
        display: 'block',
        height: '200px',
        width: '150px',
        filter: 'drop-shadow(0px 0px 5px red)',
        padding: '0px'
    };
    return (
        <div style={myStyle}>
            {props.miniWords.map( (word) => <li key={word}>{word}</li>)}
        </div>
    );
};

export default (props: Props) => {
    return (
        <Div> {
            props.data.map((arrGrp: string[]) =>
            <ul   key={arrGrp.join(',')}>
                {<Pallete miniWords={arrGrp} color={props.color}/>}
            </ul>)
        }
        </Div>
    );
};
