import * as React from 'react';

interface Props {
    color: string;
    words: string[];
}

export default (props: Props) => {
    console.log(props);
    return <h2> Hello world</h2>;
};
