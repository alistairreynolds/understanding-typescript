"use strict";
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
const input = new ProjectInput();
