var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Create as a decorator factory so it can be customised when called
function Logger(logMsg) {
    return function (constructor) {
        console.log(logMsg, constructor);
    };
}
function WithTemplate(template, selector) {
    return function (constructor) {
        var el = document.querySelector(selector);
        var p = new constructor();
        if (el) {
            el.innerHTML = template;
            el.querySelector('h1').textContent = p.name;
        }
    };
}
// Execute from the bottom up
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'me';
    }
    Person = __decorate([
        WithTemplate('<h1></h1>', '#app'),
        Logger('creating person')
    ], Person);
    return Person;
}());
var person = new Person();
// Target = the object it's assigned to
function LogProp(target, prop) {
    console.log('*** Property decorator ***');
    console.log(target, prop);
}
// Describes a getter/setter
function LogDescriptor(target, propName, descriptor) {
    console.log('*** Descriptor decorator ***');
    console.log(target, propName, descriptor);
}
// Describes a method
function LogMethod(target, methodName, descriptor) {
    console.log('*** Function decorator ***');
    console.log(target, methodName, descriptor);
}
// Logs a method parameter
function LogParameter(target, methodName, paramPos) {
    console.log('*** Param decorator ***');
    console.log(target, methodName, paramPos);
}
var Product = /** @class */ (function () {
    function Product(n, p) {
        this._name = n;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value > 0) {
                this._price = value;
            }
            else {
                throw ('Cannot have negative price');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        if (tax === void 0) { tax = 1.178; }
        return this._price * tax;
    };
    __decorate([
        LogDescriptor
    ], Product.prototype, "name");
    __decorate([
        LogDescriptor
    ], Product.prototype, "price");
    __decorate([
        LogProp
    ], Product.prototype, "_name");
    __decorate([
        LogProp
    ], Product.prototype, "_price");
    __decorate([
        LogMethod,
        __param(0, LogParameter)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
var cake = new Product('cake', 10);
cake.getPriceWithTax();
