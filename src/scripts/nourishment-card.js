/* eslint-disable no-underscore-dangle */
// import SavedNourishment from './data/saved-nourishment';

class NourishmentCard extends HTMLElement {
  constructor(saved) {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this.addEventListener('click', this.save);
    this._saved = saved;
    this._disableTag = '';
  }

  set nourishinfo(nourishinfo) {
    // debugger;
    this._nourishinfo = nourishinfo;
    this.render();
  }

  save(e) {
    e.preventDefault();
    const clickedElement = e.composedPath()[0].tagName;
    if (clickedElement.toUpperCase() === 'BUTTON') {
      this._saved.addNourishment(this._nourishinfo);
      this._disableTag = 'disabled';
    }
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>

        .polaroid {
            padding: 10px 10px 20px 10px;
            border: 1px solid #BFBFBF;
            background-color: white;
        
            box-shadow: 10px 10px 5px #aaaaaa;
            display: inline-block;
            width: 150px;
            margin: 20px 100px;
          }
        
          
          .polaroid p{
              display: inline;
              
          }
        
          
        
          .box-container{
            display: flex;
          }

          .box{
                flex-grow: 1;
            }
        
            .right{
                text-align: right;
            }

            @media screen and (min-width: 576px){
                .polaroid {
                    width: 250px;
                    margin: 20px 110px;
                }
            }

            @media screen and (min-width: 768px){
                .polaroid {
                    width: 150px;
                    margin: 20px 30px;
                }
            }

            @media screen and (min-width: 992px){
                .polaroid {
                    width: 250px;
                    martin : 20px 15px;
                }
            }

            @media screen and (min-width: 1200px){
                .polaroid {
                    width: 300px;
                }
            }

        </style>

        <div class="polaroid">
            <div>
                <section>
                    <h3>${this._nourishinfo.strMeal}</h3>
                    <img src="${this._nourishinfo.strMealThumb}" alt="Corba" width="100%">
                <section>
            </div>
            
            <div class="box-container">
                <div class="box"><p class="caption">${this._nourishinfo.strCategory}</p></div>
                <div class="box right">
                        <button type="button" class="save btn btn-primary" ${this._disableTag}>Save</button>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('nourishment-card', NourishmentCard);
export default NourishmentCard;
