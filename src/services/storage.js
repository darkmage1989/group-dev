export const setSessionData = (token, id, login) => {
  localStorage.setItem("token", token);
  localStorage.setItem("id", id);
  localStorage.setItem("login", login);
};

export const getSessionData = () => {
  //const token = localStorage.getItem("token");
  //if (token) {
  const data = {
    token: localStorage.getItem("token"),
    id: localStorage.getItem("id"),
    login: localStorage.getItem("login"),
  };
  return data;
  // } else {
  //   return null;
  // }

  // try {
  //   return data;
  // } catch (e) {
  //   console.log(e.message);
  //   return null;
  // }
};

export const clearSessionData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("login");
};

export const isAuthorize = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};
