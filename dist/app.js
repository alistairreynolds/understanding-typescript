"use strict";
class ProjectInput {
    constructor() {
        this.elements = {
            template: document.getElementById('project-input'),
            wrapper: document.getElementById('app'),
        };
        this._attachEl();
    }
    _attachEl() {
        const node = this.elements.template.content.cloneNode(true);
        this.elements.wrapper.append(node);
        // Alternate version of creating the node
        // const node = document.importNode(this.elements.template.content, true)
    }
}
const input = new ProjectInput();
