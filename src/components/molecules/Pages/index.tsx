import * as React from 'react';
import Row from '../../atoms/Row';
import data from './data';
import {Page, Row as RowT} from '@devinit/pdf-base';
import * as R from 'ramda';
import {Pages, getPagesData} from '../../utils';

const pages: Pages = getPagesData(data); // [ group 12 [  cards [] []  ]]

const createKey = (rows: RowT[]): string => rows.reduce((current, acc) => `${acc}-${current[0][0]}`);

export default () =>
    <section>
        {
            pages.map((page: RowT[], index) => {
                const rows = R.splitEvery(3, page);
                console.log('groups of 12 for a page: =', rows);
                return <Page key={createKey(page)} footNote={`30-seconds page-${index}`}>
                            {rows.map(row => <Row key={createKey(row)} row={row} />)}
                        </Page>;
            })
        }
    </section>;
