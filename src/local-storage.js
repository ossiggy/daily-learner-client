export const loadAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
  try {
      localStorage.setItem('authToken', authToken);
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
      localStorage.removeItem('authToken')
      console.log(localStorage)
  } catch (e) {}
};
