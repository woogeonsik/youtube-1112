import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("Login", { pageTitle: "login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("Users", { pageTitle: "users" });
export const userDetail = (req, res) =>
  res.render("UserDetail", { pageTitle: "userDetail" });
export const editProfile = (req, res) =>
  res.render("EditProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("ChangePassword", { pageTitle: "changePassword" });
