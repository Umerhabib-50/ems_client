export const adminLoginReducer = (state = { name: "umer" }, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_REQUEST":
      return { loading: true };
    case "ADMIN_LOGIN_SUCCESS":
      return { loading: false, adminLogin: action.payload };
    case "ADMIN_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "ADMIN_LOGOUT":
      return {};
    case "CLEAR_ERROR":
      delete state?.error;
      return { ...state };
    default:
      return state;
  }
};
