import * as prettyFormat from 'pretty-format';
// import {gqlFileContent} from '.';

describe('API tests', () => {
    it('should work', async () => {
        const data = {a: 'hey'};
        expect(prettyFormat(data)).toMatchSnapshot();
     });
});
