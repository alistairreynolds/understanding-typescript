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
var PROJECT_STATUSES;
(function (PROJECT_STATUSES) {
    PROJECT_STATUSES["ACTIVE"] = "active";
    PROJECT_STATUSES["INACTIVE"] = "finished";
})(PROJECT_STATUSES || (PROJECT_STATUSES = {}));
/******************
 * Classes
 *****************/
class ProjectList {
    constructor(status) {
        this.status = status;
        const templateEl = document.getElementById('project-list');
        const rootEl = document.importNode(templateEl.content, true).firstElementChild;
        this.elements = {
            parent: document.getElementById('app'),
            template: templateEl,
            root: rootEl
        };
        this.elements.root.id = `${this.status}-projects`;
        this._attach()
            ._renderContent();
    }
    _attach() {
        this.elements.parent.appendChild(this.elements.root);
        return this;
    }
    _renderContent() {
        this.elements.root.querySelector('h2').innerText = `${this.status} projects`;
        return this;
    }
}
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
        // Validate the data
        const validationErrors = this._validate([
            { inputEl: this.elements.titleInput, required: true, minLength: 3, maxLength: 20 },
            { inputEl: this.elements.descriptionInput, required: true, minLength: 10, maxLength: 255 },
            { inputEl: this.elements.peopleInput, required: true, min: 1, max: 10 },
        ]);
        if (validationErrors.length > 0) {
            alert(`Invalid data: ${validationErrors.join(', ')}`);
            return;
        }
        return [
            this.elements.titleInput.value,
            this.elements.descriptionInput.value,
            +this.elements.peopleInput.value
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
    /**
     *
     * @param inputEl
     * @param required
     * @param minLength
     * @param maxLength
     * @param min
     * @param max
     * @private
     */
    _validate([{ inputEl, required = false, minLength, maxLength, min, max, }]) {
        let errors = [];
        // Loop through each property and validate
        arguments[0].forEach((prop) => {
            const value = prop.inputEl.value.trim();
            const elName = prop.inputEl.getAttribute('class');
            // Check it's required
            if (prop.required && !value) {
                errors.push(`${elName} is required`);
            }
            // Min/max length
            if (typeof prop.minLength === 'number' && value.length < prop.minLength) {
                errors.push(`${elName} must be at least ${prop.minLength} characters`);
            }
            if (typeof prop.maxLength === 'number' && value.length > prop.maxLength) {
                errors.push(`${elName} must be under ${prop.maxLength} characters`);
            }
            // Min/max length
            if (typeof prop.min === 'number' && +value < prop.min) {
                errors.push(`${elName} must be at least ${prop.min}`);
            }
            if (typeof prop.max === 'number' && +value > prop.max) {
                errors.push(`${elName} must be below ${prop.maxLength}`);
            }
        });
        return errors;
    }
}
__decorate([
    Autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", Object)
], ProjectInput.prototype, "_submitHandler", null);
const input = new ProjectInput();
const activeProjects = new ProjectList(PROJECT_STATUSES.ACTIVE);
const inactiveProjects = new ProjectList(PROJECT_STATUSES.INACTIVE);
