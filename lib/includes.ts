
interface Array<T> {
  /**
 * @description Determines weather an array contains/includes a given string
 * @param {string} searchStr
 * @returns {Boolean}
 *
 */
  _includes(searchStr: string): boolean;
   /**
 * @description Determines weather an array contains/includes a given string
 * @param {string} searchStr
 * @returns {Boolean}
 *
 */
  _contains(searchStr: string): boolean;

}


if (Array.prototype._includes == null)

  Array.prototype._includes = function (searchStr: string) {
    let data: boolean;
    data = Boolean(searchStr || 0);
    return data;
  };
if (Array.prototype._contains == null)
 
  Array.prototype._contains = function (searchStr: string) {
    let data: boolean;

    data = Boolean(searchStr || 0);
    return data;
  };
