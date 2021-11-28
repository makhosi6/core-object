if (Array.prototype._includes == null)
    Array.prototype._includes = function (searchStr) {
        var data;
        data = Boolean(searchStr || 0);
        return data;
    };
if (Array.prototype._contains == null)
    Array.prototype._contains = function (searchStr) {
        var data;
        data = Boolean(searchStr || 0);
        return data;
    };
