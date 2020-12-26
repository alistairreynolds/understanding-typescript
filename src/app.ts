class ProjectInput {

    private elements: {
        template: HTMLTemplateElement
        parent: HTMLElement,
        form?: HTMLFormElement;          // Needs to be optional as it won't be there when we create the elements object
        titleInput?: HTMLInputElement,
        descriptionInput?: HTMLInputElement,
        peopleInput?: HTMLInputElement,
    };

    constructor() {
        this.elements = {
            template: document.getElementById('project-input')! as HTMLTemplateElement,
            parent: document.getElementById('app')! as HTMLElement,
        }

        this.elements.form = document.importNode(this.elements.template.content, true).firstElementChild as HTMLFormElement;
        this.elements.form.id = 'user-input';

        this.elements.titleInput = this.elements.form.querySelector('.title')! as HTMLInputElement
        this.elements.descriptionInput = this.elements.form.querySelector('.description')! as HTMLInputElement;
        this.elements.peopleInput = this.elements.form.querySelector('.people')! as HTMLInputElement;

        // Alternate version of creating the node
        // this.elements.template.content.cloneNode(true) as HTMLFormElement;
        this._attach()
            ._addListeners();
    }


    private _submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.elements.titleInput?.value);
    }


    private _addListeners(): this {
        this.elements.form?.addEventListener('submit', this._submitHandler.bind(this));

        return this;
    }


    private _attach(): this {
        this.elements.parent.appendChild(this.elements.form!)

        return this;
    }

}

const input = new ProjectInput();