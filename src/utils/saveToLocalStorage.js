const saveToLocalStorage = (key, data) => {
  const today = Date.now();
  const dataForSave = {
    date: today,
    data: data,
  };
  localStorage.setItem(key, JSON.stringify(dataForSave));
};

export default saveToLocalStorage;
