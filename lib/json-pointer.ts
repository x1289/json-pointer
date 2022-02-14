import {GetResponse} from './types';
/**
 * JsonPointer class
 */
export default class JsonPointer {
  jsonPointer: Array<string>;
  /**
   * Constructor for JsonPointer class
   */
  constructor() {
    this.jsonPointer = null;
  }

  /**
   * Returns the value of the entry in the object for this path if it exists
   * otherwise returns null
   * @param {object} obj Object to search by pointer
   * @param {string} pointer Pointer for specified object
   * @return {GetResponse} null or entry in obj
   */
  static get(obj: object, pointer: string): GetResponse {
    if (!pointer ||
      !pointer.includes('/') ||
      !pointer.startsWith('/')) return null;

    const pointerSplitted = pointer.split('/').slice(1);
    if (pointerSplitted.length === 0) return null;

    let currentResult;
    let currentObj = obj;
    pointerSplitted.forEach((entry) => {
      currentObj = currentObj[entry];
      currentResult = currentObj;
    });
    return currentResult;
  }

  /**
   * getter for current pointer
   * @return {string} current json pointer
   */
  getCurrentPointer(): null | string {
    if (!this.jsonPointer) return null;
    if (this.jsonPointer.length > 0) return `/${this.jsonPointer.join('/')}`;
  }
}
