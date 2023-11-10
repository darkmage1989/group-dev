export const setSessionData = (token) => {
  sessionStorage.setItem("token", token);
};

export const getSessionData = () => {
  try {
    const token = sessionStorage.getItem("token");
    return token;
  } catch (e) {
    console.log(e.message);
    return null;
  }
};

export const clearSessionData = () => {
  sessionStorage.removeItem("token");
};

export const isAuthorize = () => {

  const token = sessionStorage.getItem("token");

  return token;
};
