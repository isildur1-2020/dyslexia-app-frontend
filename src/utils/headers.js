export const standardHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("token"),
});
