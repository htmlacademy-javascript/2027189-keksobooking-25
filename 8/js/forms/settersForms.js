const setDisabledField = (field) => (field.disabled = true);
const setActiveField = (field) => (field.disabled = false);

const setDisabledElements = (fields) => fields.forEach(setDisabledField);
const setActiveElements = (fields) => fields.forEach(setActiveField);

const setDisabledModifierClass = (element, className) => element.classList.add(className);
const setActiveModifierClass = (element, className) => element.classList.remove(className);

const toggledDisabledModifierClass = (element, className, isDisabled) => {
  if (isDisabled) {
    return setDisabledModifierClass(element, className);
  }
  return setActiveModifierClass(element, className);
};

export {
  setDisabledElements,
  setDisabledModifierClass,
  setActiveModifierClass,
  setActiveElements,
  toggledDisabledModifierClass,
};
