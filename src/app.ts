/******************
 * Decorators
 *****************/

/**
 * Autobind the function to the passed descriptor
 *
 * @param _
 * @param _2
 * @param descriptor
 * @constructor
 */
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    return {
        enumerable: false,
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        }
    }
}


/******************
 * Classes
 *****************/

class ProjectInput {

    private readonly elements: {
        template: HTMLTemplateElement
        parent: HTMLElement,
        form: HTMLFormElement,
        titleInput: HTMLInputElement,
        descriptionInput: HTMLInputElement,
        peopleInput: HTMLInputElement,
    };

    constructor() {

        // Define some elements we'll need to reference inside the "elements" object, so we need them earlier on
        const templateEl = document.getElementById('project-input')! as HTMLTemplateElement
        const formEl = document.importNode(templateEl.content, true).firstElementChild as HTMLFormElement;

        this.elements = {
            template: <HTMLTemplateElement>templateEl,
            form: <HTMLFormElement>formEl,
            parent: <HTMLElement>document.getElementById('app')!,
            titleInput: <HTMLInputElement>formEl.querySelector('.title')!,
            descriptionInput: <HTMLInputElement>formEl.querySelector('.description')!,
            peopleInput: <HTMLInputElement>formEl.querySelector('.people')!,
        }

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
    private _getUserInput(): [string, string, number] | void {

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
    @Autobind
    private _submitHandler(event: Event): this {
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
    private _clearInputs(): this{
        this.elements.peopleInput.value = "";
        this.elements.descriptionInput.value = "";
        this.elements.titleInput.value = "";

        return this;
    }


    /**
     * Adds event listeners to the form
     * @private
     */
    private _addListeners(): this {
        this.elements.form?.addEventListener('submit', this._submitHandler.bind(this));

        return this;
    }


    /**
     * Attaches the elements to the form
     * @private
     */
    private _attach(): this {
        this.elements.parent.appendChild(this.elements.form!)

        return this;
    }

}

const input = new ProjectInput();