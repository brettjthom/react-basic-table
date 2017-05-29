import { isEqual, differenceWith } from 'lodash';

export function isArrayEqual(a, b) {
    return differenceWith(a, b, isEqual).length > 0;
}