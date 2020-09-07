/* eslint-disable no-underscore-dangle */
class SavedNourishment {
  constructor() {
    this.nourishmentArray = [];
  }

  addNourishment(nourishment) {
    this.nourishmentArray.push(nourishment);
    this.addButtonType();
  }

  removeNourishment(nourishment) {
    const newArray = this.nourishmentArray.filter((obj) => obj.name !== nourishment.name);
    this.nourishmentArray = JSON.parse(JSON.stringify(newArray));
    const event = new Event('click');
    document.querySelector('#saved').dispatchEvent(event);
  }

  addButtonType() {
    this.nourishmentArray[this.nourishmentArray.length - 1].buttonType = 'remove';
  }

  get nourishment() {
    return this.nourishmentArray;
  }

  set nourishment(newNourithment) {
    this.nourishmentArray = newNourithment;
  }
}

export default SavedNourishment;
