class SavedNourishment {
  constructor() {
    this._nourishment = [];
  }

  addNourishment(nourishment) {
    this._nourishment.push(nourishment);
  }

  get nourishment() {
    return this._nourishment;
  }
}

export default SavedNourishment;
