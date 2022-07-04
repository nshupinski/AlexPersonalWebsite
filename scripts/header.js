class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "
        <header></header>
        "
    }
}

customElements.define('my-header', MyHeader)