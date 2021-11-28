interface Array<T> {
  /**
   * @description Determines weather an array contains/includes a given string
   * @param {string} searchStr
   * @returns {Boolean}
   *
   */
  _search(searchStr: string): boolean;
}

if (Array.prototype._search == null)
  /**
   * @description Determines weather an object contains/includes a given string
   * @param {string} searchStr
   * @returns {Boolean}
   *
   */
  Array.prototype._search = function (searchStr) {
    var data: boolean;
    data = Boolean(searchStr);
    return data;
  };
