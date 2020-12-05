var DataStorage = /** @class */ (function () {
    function DataStorage() {
        // Define a custom/generic type so that it doesn't really matter what gets passed
        // Don't allow objects as they won't be removed very well
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return this.data;
    };
    return DataStorage;
}());
// Now we define what we want to store when we instantiate the object
var textStorage = new DataStorage();
textStorage.addItem('cake');
var numberStorage = new DataStorage();
numberStorage.addItem(10);
function createCourseGoal(title, description, completeBy) {
    // Partial allows you to turn every parameter as optional
    var obj = {};
    obj.title = title;
    obj.description = description;
    obj.completeBy = completeBy;
    // Type cast so that it returns as a CourseGoal properly
    return obj;
}
console.log(createCourseGoal('sad', 'fsdfs', new Date()));
var names = ['dave', 'bill'];
// Can no longer add to names
