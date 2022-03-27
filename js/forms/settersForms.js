const setDisabledField = (field) => field.setAttribute('disabled', '');
const setActiveField = (field) => field.removeAttribute('disabled');

const setDisabledFields = (fields) => fields.forEach((field) => setDisabledField(field));
const setActiveFields = (fields) => fields.forEach((field) => setActiveField(field));

// TODO не уверен, что решение хорошее, так как обращаемся к незнакомому элементу массива
const setDisabledModifierClass = (element) => element.classList.add(`${element.classList[0]}--disabled`);
const setActiveModifierClass = (element) => element.classList.remove(`${element.classList[0]}--disabled`);

export {
  setDisabledFields,
  setDisabledModifierClass,
  setActiveModifierClass,
  setActiveFields,
};
