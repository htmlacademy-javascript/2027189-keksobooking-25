const setTextContent = (parentElement, className, textContent) => {
  const textElement = parentElement.querySelector(className);
  if (textContent) {
    textElement.textContent = textContent;
  } else {
    textElement.remove();
  }
};

const setAvatar = (parentElement, className, url) => {
  const avatarElement = parentElement.querySelector(className);
  if (url) {
    avatarElement.src = url;
  } else {
    avatarElement.remove();
  }
};

const setApartmentPhotos = (parentElement, className, urlList) => {
  const photosList = parentElement.querySelector(className);
  if (urlList.length) {
    const photoTemplate = photosList.querySelector('img');
    const photosFragment = document.createDocumentFragment();
    urlList.forEach((url) => {
      const newPhoto = photoTemplate.cloneNode(true);
      newPhoto.src = url;
      photosFragment.append(newPhoto);
    });
    photosList.replaceChild(photosFragment, photoTemplate);
  } else {
    photosList.remove();
  }
};

const setFacilitiesType = (parentElement, className, facilitiesListData) => {
  const facilitiesParent = parentElement.querySelector(className);
  if (facilitiesListData.length) {
    const facilitiesList = facilitiesParent.querySelectorAll('li');
    const facilitiesListClasses = facilitiesListData.map((facilitiesItemData) => `popup__feature--${facilitiesItemData}`);
    facilitiesList.forEach((facilitiesItem) => {
      if (!facilitiesListClasses.includes(facilitiesItem.classList[1])) {
        facilitiesItem.remove();
      }
    });
  } else {
    facilitiesParent.remove();
  }
};

const setApartmentType = (parentElement, className, apartmentType, nameApartmentType) => {
  const apartmentTypeElement = parentElement.querySelector(className);
  if (apartmentType) {
    apartmentTypeElement.textContent = nameApartmentType[apartmentType];
  } else {
    apartmentTypeElement.remove();
  }
};

export {
  setTextContent,
  setAvatar,
  setApartmentPhotos,
  setFacilitiesType,
  setApartmentType,
};
