export function setDataToLocal<DataType>(key: string, payload: DataType) {
  localStorage.setItem(key, JSON.stringify(payload));
}

export function getDataFormLocal<DataType>(key: string) {
  const dataFormLocal = localStorage.getItem(key);
  if (!dataFormLocal) return null;
  return JSON.parse(dataFormLocal) as DataType;
}
