import JsonPointer from '../lib/json-pointer';
import {expect} from 'chai';
import * as CONST from '../lib/constants';

describe('JsonPointer class', () => {
  const jp = new JsonPointer();
  it('should initialize an object with an empty json pointer path', () => {
    expect(jp.getCurrentPointer()).to.equal(CONST.NON_EXISTENT_JSON_POINTER);
  });
  it('should return null on invalid pointer for object', () => {
    expect(JsonPointer.get(CONST.TEST_OBJ, 'doesNotExist')).to.equal(null);
  });
  it('should return the expected value on valid path', () => {
    expect(JsonPointer.get(CONST.TEST_OBJ, '/a')).to.equal(1);
  });
});
