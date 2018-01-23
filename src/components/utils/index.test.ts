import * as prettyFormat from 'pretty-format';
import {getPagesData} from '.';

describe('utils', () => {
    it('should split data', () => {
        const data = [
            ['a', 'a'], ['c', 'c'],
            ['d', 'd'], ['e', 'e'],
            ['f', 'f'], ['g', 'g'],
            ['l', 'l'], ['k', 'k'],
        ];
        const results = getPagesData(data, 4);
        expect(prettyFormat(results)).toMatchSnapshot();
     });
});
