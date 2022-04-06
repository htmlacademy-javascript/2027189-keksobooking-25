const getValidStatus = (options, roomsComponent, capacityComponent) => options[roomsComponent.value].includes(Number(capacityComponent.value));
const getValueSelectedElement = (selectElement) => selectElement[selectElement.selectedIndex].value;

export {getValidStatus, getValueSelectedElement};
