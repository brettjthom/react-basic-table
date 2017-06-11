import React from 'react';
import { expect } from 'chai';
import { isArrayOfObjectsEqual } from '../src/utils';

test('isArrayOfObjectsEqual detects properly if two arrays are not equal', () => {
    const a = [
        {id: 1, match: 'one'},
        {id: 2, match: 'two'}
    ];
    const b = [
        {id: 1, match: 'one'},
        {id: 2, match: 'two'}
    ];
  expect(isArrayOfObjectsEqual(a, b)).to.equal(true);
});

test('isArrayOfObjectsEqual detects properly if two arrays are not equal', () => {
    const a = [
        {id: 1, match: 'one'},
        {id: 2, match: 'two'}
    ];
    const b = [
        {id: 1, match: 'one'},
        {id: 3, match: 'three'}
    ];
  expect(isArrayOfObjectsEqual(a, b)).to.equal(false);
});

test('isArrayOfObjectsEqual detects properly if two arrays are equal but in different order', () => {
    const a = [
        {id: 1, match: 'one'},
        {id: 2, match: 'two'}
    ];
    const b = [
        {id: 2, match: 'two'},
        {id: 1, match: 'one'}
    ];
  expect(isArrayOfObjectsEqual(a, b)).to.equal(true);
});

test('isArrayOfObjectsEqual detects properly if two arrays are not equal because they are different lengths', () => {
    const a = [
        {id: 1, match: 'one'},
        {id: 2, match: 'two'},
        {id: 3, match: 'three'}
    ];
    const b = [
        {id: 1, match: 'one'},
        {id: 2, match: 'two'}
    ];
  expect(isArrayOfObjectsEqual(a, b)).to.equal(false);
  expect(isArrayOfObjectsEqual(b, a)).to.equal(false);
});