const saveLocalStorage = (key, value) => {
  if (typeof (Storage) === 'undefined') return;
  if (typeof value === 'object' && value !== null && value !== 'null') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const loadLocalStorage = (key) => {
  if (typeof (Storage) === 'undefined') return false;
  if (localStorage.getItem(key) === 'null') return false;
  if (localStorage.getItem(key) === null) return false;
  if (localStorage.getItem(key) === '[]') return false;

  return JSON.parse(localStorage.getItem(key));
};

export { saveLocalStorage, loadLocalStorage };
