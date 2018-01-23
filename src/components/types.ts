import * as R from 'ramda';

export type Card = string[]; // 4 words
export type Row = Card[]; // 4 cards
export type Pages = Row[]; // 3 rows

// const getRow = (data: Page): => data

// const getCard = (data) => data

// groups of 12 cards
export const getPagesData = (data: string[][], interval: number = 9): Pages =>
    R.splitEvery(interval, data);
