export const getFieldsTranslationsFromObjByProp = (obj = {}, propName = "") => {
  const field = obj[propName];

  const { en, hy, ru } = field;

  const propName_en = `${propName}_en`;
  const propName_hy = `${propName}_hy`;
  const propName_ru = `${propName}_ru`;

  return {
    [propName_en]: en,
    [propName_hy]: hy,
    [propName_ru]: ru,
  };
};

export const filterDataFromArr = (arr, filteredField1, filteredField2) => {
  const data = arr.map(item => {
    item.key = item._id;
    if (item[filteredField1] && item[filteredField2]) {
      const obj = {
        ...item,
        ...getFieldsTranslationsFromObjByProp(item, filteredField1),
        ...getFieldsTranslationsFromObjByProp(item, filteredField2),
      };
      delete obj[filteredField1];
      delete obj[filteredField2];
      return obj;
    }
  });
  return data;
};

export const filterTitleFromArr = (arr, filteredField) => {
  const data = arr.map(item => {
    item.key = item._id;
    if (item[filteredField]) {
      const obj = {
        ...item,
        ...getFieldsTranslationsFromObjByProp(item, filteredField),
      };
      delete obj[filteredField];
      return obj;
    }
  });
  return data;
};

export const blobFileToBase64 = (blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function() {
    const base64data = reader.result;
    return base64data;
  }
}

export const currentLang = ( )=> {
  return localStorage.getItem("i18nextLng")
}