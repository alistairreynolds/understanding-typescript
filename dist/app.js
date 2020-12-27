"use strict";
/******************
 * Decorators
 *****************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Autobind the function to the passed descriptor
 *
 * @param _
 * @param _2
 * @param descriptor
 * @constructor
 */
function Autobind(_, _2, descriptor) {
    return {
        enumerable: false,
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        }
    };
}
/******************
 * Classes
 *****************/
class ProjectInput {
    constructor() {
        this.elements = {
            template: document.getElementById('project-input'),
            parent: document.getElementById('app'),
        };
        this.elements.form = document.importNode(this.elements.template.content, true).firstElementChild;
        this.elements.form.id = 'user-input';
        this.elements.titleInput = this.elements.form.querySelector('.title');
        this.elements.descriptionInput = this.elements.form.querySelector('.description');
        this.elements.peopleInput = this.elements.form.querySelector('.people');
        // Alternate version of creating the node
        // this.elements.template.content.cloneNode(true) as HTMLFormElement;
        this._attach()
            ._addListeners();
    }
    _submitHandler(event) {
        var _a;
        event.preventDefault();
        console.log((_a = this.elements.titleInput) === null || _a === void 0 ? void 0 : _a.value);
    }
    _addListeners() {
        var _a;
        (_a = this.elements.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this._submitHandler.bind(this));
        return this;
    }
    _attach() {
        this.elements.parent.appendChild(this.elements.form);
        return this;
    }
}
__decorate([
    Autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], ProjectInput.prototype, "_submitHandler", null);
const input = new ProjectInput();
