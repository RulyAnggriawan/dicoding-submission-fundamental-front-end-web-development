class SkewedBox extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.text = this.getAttribute("text") || null;
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML = `
        <style>
        .skewed-box{
            border: 1px solid black;
            padding: 10px;
            display: inline-block;
            transform: skewX(-30deg);
            min-width: 100px;
            margin: 5px 5px;
        }
        
        .skewed-content{
            text-align: center;
            transform: skewX(30deg);
        }
        </style>
        <div class="skewed-box">
            <div class="skewed-content">
                ${this.text}
            </div>
        </div>
        `;
    }
}

customElements.define("skewed-box", SkewedBox);