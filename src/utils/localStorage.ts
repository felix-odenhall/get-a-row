export const saveToLocalStorage = (key: string, value: string | number) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getFromLocalStorage = (str: string) => localStorage.getItem(str);

export const parseLocalStorage = (
  localStorageObject: string | null
): string => {
  if (!localStorageObject) {
    return "";
  }
  return JSON.parse(localStorageObject);
};
