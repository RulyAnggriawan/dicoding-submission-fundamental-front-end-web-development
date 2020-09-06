import NourishmentCard from './nourishment-card';

class NourishmentList extends HTMLElement {
  constructor(saved) {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._saved = saved;
  }

  set nourishList(nourishLish) {
    this._nourishLish = nourishLish;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
        

        .flex-container{
            display: flex;
            flex-direction: column !important;
        }
        
        .flex-row{
            display: flex;
        }
        
        .flex-box{
            flex-grow: 1;
            flex-basis: 33%;
        }
        
        @media screen and (max-width: 768px){
            .flex-row{
                flex-direction: column !important;
            }
        }
        
        
        </style>
        `;
    // const ul = document.createElement('ul');

    // this._nourishLish.forEach(nourish => {
    //     const li = document.createElement('li');
    //     const card = new NourishmentCard(this._saved);
    //     card.nourishinfo = nourish;
    //     li.appendChild(card);
    //     ul.appendChild(li);
    // });

    const divContainer = document.createElement('div');
    divContainer.classList.add('flex-container');
    const { length } = this._nourishLish;
    let counter = 0;

    for (let i = 0; i < length; i += 3) {
      const divRow = document.createElement('div');
      divRow.classList.add('flex-row');

      for (let j = 0; j < 3; j += 1) {
        const divBox = document.createElement('div');
        divBox.classList.add('flex-box');

        if (counter < length) {
          const card = new NourishmentCard(this._saved);
          card.nourishinfo = this._nourishLish[i + j];
          divBox.appendChild(card);
          counter += 1;
        }

        divRow.appendChild(divBox);
      }

      divContainer.appendChild(divRow);
    }

    this._shadowRoot.appendChild(divContainer);
  }
}

customElements.define('nourishment-list', NourishmentList);
export default NourishmentList;
