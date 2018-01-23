import * as React from 'react';
import {Document, Page, Header, TextBlock, colors} from '@devinit/pdf-base';
import Card from '../components/Card';

export default () => (
    <Document>
    <Page footNote="Home">
        <Header title="30 seconds"/>
        <div style={{marginTop: '2em' }}>
            <TextBlock>
                <h3> 30 seconds Cards</h3>
            </TextBlock>
        </div>
        <div style={{marginLeft: '2em' }}>
            <TextBlock>
               <Card
                color={colors.red}
                data={[['alex', 'allan', 'Betty'], ['Bula', 'Dennis', 'Jose'],
                ['alice', 'peace', 'tom'], ['jon'], ['tom'], ['uuuu']]}
               />
            </TextBlock>
        </div>
    </Page>
</Document>
);
