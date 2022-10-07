export const jwtToString = (token) => {
  let data = null;
  try {
    const [, payload] = token.split(".");
    data = atob(payload);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUsername = () => {
  let info = localStorage.getItem("session");
  const { username } = JSON.parse(info);
  return username;
};
