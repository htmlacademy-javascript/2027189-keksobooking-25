const setStylesList = (list) => {
  list.style.display = 'grid';
  list.style.gridTemplateColumns = 'repeat( auto-fit, minmax(250px, 1fr) )';
  list.style.gridGap = '50px';
  list.style.height = 'auto';
  list.style.padding = '20px';
};

export {setStylesList};
