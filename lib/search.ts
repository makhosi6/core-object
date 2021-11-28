interface Array<T> {
  _search(searchStr: string): boolean;
}

if (Array.prototype._search == null)
  /**
   * @memberof Array
   * @module Array
   * @description Determines weather an array contains/includes a given string
   * @method
   * @param {string} searchStr
   * @returns {Boolean}
   *
   */
  Array.prototype._search = function (searchStr) {
    var data: boolean;
    data = Boolean(searchStr);
    return data;
  };
