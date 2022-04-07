const getElementFromDocument = (nameElement) => document.querySelector(nameElement);

const getTemplateFromDocument = (nameTemplate, nameElement) => document.querySelector(nameTemplate).content.querySelector(nameElement);

export {
  getElementFromDocument,
  getTemplateFromDocument,
};
