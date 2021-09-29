export class InputField {
    constructor(id, type, placeholder) {
        (this.id = id), (this.type = type), (this.placeholder = placeholder);
    }

    get createElement() {
        let input = document.createElement('input');
        input.id = this.id;
        input.setAttribute('type', this.type);
        input.setAttribute('placeholder', this.placeholder);
        console.log(input);
        return input;
    }
}