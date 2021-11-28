/**
 * @class
 */
interface Array<T> {
  /**
   * @description Determines weather an array contains/includes a given string
   * @method
   * @param {string} searchStr
   * @returns {Boolean}
   *
   */
  _includes(searchStr: string): boolean;
  /**
   * @description Determines weather an array contains/includes a given string
   * @method
   * @param {string} searchStr
   * @returns {Boolean}
   *
   */
  _contains(searchStr: string): boolean;
}
