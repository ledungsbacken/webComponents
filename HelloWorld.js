class HelloWorld extends HTMLElement
{
    constructor(args = {})
    {
        super();
        console.log(args);
    }
    connectedCallback(args = {})
    {
        this.init();
    }
    init() {
        this.innerHTML = '<h1>Hello World!</h1>';
    }
}
window.customElements.define('hello-world', HelloWorld);
