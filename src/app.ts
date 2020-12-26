class ProjectInput {

    private elements: {
        template: HTMLTemplateElement
        wrapper: HTMLElement
    };

    constructor() {
        this.elements = {
            template: document.getElementById('project-input')! as HTMLTemplateElement,
            wrapper: document.getElementById('app')! as HTMLElement,
        }

        this._attachEl();
    }


    private _attachEl(): void {
        const node = this.elements.template.content.cloneNode(true);
        this.elements.wrapper.append(node)

        // Alternate version of creating the node
        // const node = document.importNode(this.elements.template.content, true)
    }

}

const input = new ProjectInput();