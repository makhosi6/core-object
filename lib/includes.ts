/**
 * @class
 */
interface Array<T> {
  _includes(searchStr: string): boolean;
  _contains(searchStr: string): boolean;
}

if (Array.prototype._includes == null)
  /**
   * @memberof Array
   * @module Array
   * @description Determines weather an array contains/includes a given string
   * @method
   * @param {string} searchStr
   * @returns {Boolean}
   *
   */
  Array.prototype._includes = function (searchStr: string) {
    let data: boolean;
    data = Boolean(searchStr);
    return data;
  };
if (Array.prototype._contains == null)
  /**
   * @memberof Array
   * @module Array
   * @description Determines weather an array contains/includes a given string
   * @method
   * @param {string} searchStr
   * @returns {Boolean}
   *
   */
  Array.prototype._contains = function (searchStr: string) {
    let data: boolean;

    data = Boolean(searchStr);
    return data;
  };
