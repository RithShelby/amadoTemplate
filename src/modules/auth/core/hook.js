import { reqGetProfile, reqLogin } from "./request";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "./authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const onLogin = (payload) => {
    reqLogin(payload).then((res) => {
      const data = res.data.data;
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
    });
  };

  const onGetProfile = () => {
    localStorage.getItem("token") &&
      reqGetProfile().then((res) => {
        const data = res.data.data;
        dispatch(setUser(data));
      });
  };

  return { onLogin, onGetProfile };
};

export { useAuth };
