import { isEqual, differenceWith } from 'lodash';

export function isArrayOfObjectsEqual(a, b) {
    return differenceWith(a, b, isEqual).length === 0
        && differenceWith(b, a, isEqual).length === 0;
}