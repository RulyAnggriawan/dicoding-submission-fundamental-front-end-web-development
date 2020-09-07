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
    const clickedElement = e.composedPath()[0].innerHTML;
    if (clickedElement.toUpperCase() === 'SAVE') {
      this._saved.addNourishment(JSON.parse(JSON.stringify(this._nourishinfo)));
      this._disableTag = 'disabled';
    } else if (clickedElement.toUpperCase() === 'REMOVE') {
      // console.log();
      this._saved.removeNourishment(this._nourishinfo);
    }
    this.render();
  }

  render() {
    let buttonString = '';
    if (this._nourishinfo.buttonType === 'remove') {
      buttonString = '<button type="button" class="button">Remove</button>';
    } else {
      buttonString = `<button type="button" class="save button ${this._disableTag}">Save</button>`;
    }

    this._shadowRoot.innerHTML = `
        <style>

        .{
            font-size: 16px;
        }

        .polaroid {
            padding: 5px 10px 10px 10px;
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

            .left{
                text-align: left;
            }
        
            .right{
                text-align: right;
            }

            .caption {
                line-height: 40px;
            }

            .button {
                background-color: #0074F9;
                border: none;
                color: white;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                border-radius : 5px;
              }

            .disabled {
                opacity: 0.6;
                cursor: not-allowed;
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

                h3 {
                    font-size: small;
                }

                .{
                    font-size: 16px;
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
                    <h3>${this._nourishinfo.name}</h3>
                    <img src="${this._nourishinfo.imageUrl}" alt="Corba" width="100%">
                <section>
            </div>
            
            <div class="box-container">
                <div class="box left"><p class="caption">${this._nourishinfo.category}</p></div>
                <div class="box right">
                        ${buttonString}
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('nourishment-card', NourishmentCard);
export default NourishmentCard;
