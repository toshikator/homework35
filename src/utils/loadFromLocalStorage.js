const loadFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export default loadFromLocalStorage;
