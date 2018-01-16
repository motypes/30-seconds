import * as fs from 'fs';
import * as csv from 'fast-csv';
import * as R from 'ramda';

const result: any[] = [];
const stream = fs.createReadStream('30-seconds.csv');

csv
  .fromStream(stream)
  .on('data', (data: any) => {
    result.push(data);
  })
  .on('end', (data) => {
    console.log('done', result[1]);
    const flat = flatten(result);
    const random = randomize(flat);
    console.log(unique(random));
  });

const flatten = arr =>
  R.flatten(arr).filter((word) => word && word.length);

const randomize = (arr) => {
  arr.forEach((name, index) => {
    const randomIndex = Math.floor(Math.random() * (arr.length));
    const itemAtIndex = arr[randomIndex];
    arr[randomIndex] = arr[arr.length - 1];
    arr[arr.length - 1] = itemAtIndex;
  });
  return arr;
};

const unique = (arr) => {
return  R.uniq(arr).reduce((acc, curr, index)=> {
    const size = 5;
    if ((index % size) !== 0) {
      acc.push(arr.slice(index, index + size));
    }
    return acc;
  }, []);
};
