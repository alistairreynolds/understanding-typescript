var Storage = /** @class */ (function () {
    function Storage() {
        this.data = [];
    }
    Storage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    Storage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    Storage.prototype.getItems = function () {
        return this.data;
    };
    return Storage;
}());
