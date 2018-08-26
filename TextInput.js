class TextInput extends HTMLElement
{
    constructor(args = {})
    {
        super();

        this.inputValue = this.hasAttribute('value') ? this.getAttribute('value') : '';
        this.input = {};
        this.addEventListener('keyup', e => {
            this.value = input.value;
        });
    }
    connectedCallback()
    {
        this.render();
        this.input = window.document.getElementById('input');
        this.input.value = this.value;
    }

    get value()
    {
        return this.inputValue;
    }

    set value(value)
    {
        this.inputValue = value;
    }

    render()
    {
        this.innerHTML = '<input type="text" id="input" />';
    }
}
window.customElements.define('text-input', TextInput);
