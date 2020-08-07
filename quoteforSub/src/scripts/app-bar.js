class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<h2>Quote for You</h2>`;
    }
}

customElements.define("app-bar", AppBar);

//export AppBar;