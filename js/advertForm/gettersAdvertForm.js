const getValidStatus = (options, roomsComponent, capacityComponent) => options[roomsComponent.value].includes(Number(capacityComponent.value));

export {getValidStatus};
