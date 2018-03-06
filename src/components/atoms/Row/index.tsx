import * as React from 'react';
import {Div} from 'glamorous';
import Card from '../Card';

interface Props {
    row: string[][];
}

export default ({row}: Props) =>
    <Div margin="10px" display="flex" flexDirection="row">
        {row.map((card: string[], index: number) => {
            const color = (index % 2) === 0 ? 'blue' : 'yellow';
            return (<Div key={card.join(',')}>
                        <Card backgroundColor={color} card={card} />
                    </Div>);
            })
        }
    </Div>;
