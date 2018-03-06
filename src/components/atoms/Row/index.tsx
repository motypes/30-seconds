import * as React from 'react';
import {Div} from 'glamorous';
import {Row} from '../../types';
import Card from '../Card';

interface Props {
    row: Row;
    color: string;
}

export default ({row, color}: Props) =>
    <Div margin="10px" display="flex" flexDirection="row">
        {row.map((card: string[], index: number) => {
            return (<Div key={card.join(',')}>
                        <Card card={card}  backgroundColor={color}/>
                    </Div>);
            })
        }
    </Div>;
