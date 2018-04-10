import * as React from 'react';
import Row from '../../atoms/Row';
import data from './data';
import {Page, Row as RowT} from '@devinit/pdf-base';
import * as R from 'ramda';
import {Pages} from '../../types';

const pages: Pages =  R.splitEvery(9, data);

const createKey = (rows: RowT[]): string => rows.reduce((current, acc) => `${acc}-${current[0][0]}`);

export default () =>
    <section >
        {
            pages.map((page: RowT[], index) => {
                const color = (index % 2) === 0 ? '#ff1a1a' : '#CCCC00';
                const rows = R.splitEvery(3, page);
                return <Page key={createKey(page)} footNote={`30-seconds page-${index}`}>
                            {rows.map(row => <Row key={createKey(row)} color={color} row={row} />)}
                        </Page>;
            })
        }
    </section>;
