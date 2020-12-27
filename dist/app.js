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
        // Define some elements we'll need to reference inside the "elements" object, so we need them earlier on
        const templateEl = document.getElementById('project-input');
        const formEl = document.importNode(templateEl.content, true).firstElementChild;
        this.elements = {
            template: templateEl,
            form: formEl,
            parent: document.getElementById('app'),
            titleInput: formEl.querySelector('.title'),
            descriptionInput: formEl.querySelector('.description'),
            peopleInput: formEl.querySelector('.people'),
        };
        this.elements.form.id = 'user-input';
        // Alternate version of creating the node
        // this.elements.template.content.cloneNode(true) as HTMLFormElement;
        this._attach()
            ._addListeners();
    }
    /**
     * Fetches the user input data
     * @private
     */
    _getUserInput() {
        // TODO: validation
        return [
            this.elements.titleInput.value,
            this.elements.descriptionInput.value,
            +this.elements.peopleInput.value,
        ];
    }
    /**
     * Handles submitting  the form
     * @param event
     * @private
     */
    _submitHandler(event) {
        event.preventDefault();
        const userData = this._getUserInput();
        if (!userData) {
            return this;
        }
        // Destructure the data
        const [title, desc, people] = userData;
        console.log(title, desc, people);
        this._clearInputs();
        return this;
    }
    /**
     * Clears the input fields
     *
     * @private
     */
    _clearInputs() {
        this.elements.peopleInput.value = "";
        this.elements.descriptionInput.value = "";
        this.elements.titleInput.value = "";
        return this;
    }
    /**
     * Adds event listeners to the form
     * @private
     */
    _addListeners() {
        var _a;
        (_a = this.elements.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this._submitHandler.bind(this));
        return this;
    }
    /**
     * Attaches the elements to the form
     * @private
     */
    _attach() {
        this.elements.parent.appendChild(this.elements.form);
        return this;
    }
}
__decorate([
    Autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", Object)
], ProjectInput.prototype, "_submitHandler", null);
const input = new ProjectInput();
