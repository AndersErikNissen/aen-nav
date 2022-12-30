customElements.define(
    'aen-nav',
    class extends HTMLElement {
        constructor() {
            super();
            this.shadow = this.attachShadow( {mode: 'open'} );
        }
        
        connectedCallback() {
            this.shadow.appendChild(this._template().cloneNode(true));
            
        }

        _template() {
            let template = document.createElement('template');
            let h1 = document.createElement('h1');
            h1.textContent = "UUU";
            // template.content.appendChild(h1);
            template.innerHTML = `
                <h1>INNER</h1>
            `;
            // .content is part of the Template Syntax that gets the DocumentFragment.
            return template.content;
        }
    }
)