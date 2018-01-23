import * as R from 'ramda';

export type Card = string[]; // 4 words
export type Row = Card[]; // 4 cards
export type Page = Row[]; // 3 rows

// const getRow = (data: Page): => data

// const getCard = (data) => data

// groups of 12 cards
const getPagesData = (data: string[][]): string[][] => R.splitEvery(12, data);
