import axios from "axios";

//USER LOGIN
export const adminLoginAction = (loginData) => async (dispatch) => {
  try {
    dispatch({
      type: "ADMIN_LOGIN_REQUEST",
    });
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/admin/signin`,
      loginData
    );

    dispatch({
      type: "ADMIN_LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_LOGIN_FAIL",
      payload: error?.response && error?.response?.data,
    });
  }
};
