import { isEqual, differenceWith } from 'lodash';

export default function isArrayOfObjectsEqual(a, b) {
  return differenceWith(a, b, isEqual).length === 0
        && differenceWith(b, a, isEqual).length === 0;
}
