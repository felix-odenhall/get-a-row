export const isValidUsername = (username: string) => {
  if (username.length > 1) {
    const regexp = /^[A-Za-z0-9]*$/;
    return regexp.test(username) || regexp.test(username);
  }
  return false;
};
