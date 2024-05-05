import { reGetUser, reCreateUser, reUpdateUser } from "./request";
import { useDispatch } from "react-redux";
import { setList, setLoading } from "./userSlice";
import { useNavigate } from "react-router-dom";
const useUsers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUsers = () => {
    dispatch(setLoading(true));
    reGetUser().then((respone) => {
      dispatch(setList(respone.data.data));
      dispatch(setLoading(false));
    });
  };
  const createUser = (payload) => {
    dispatch(setLoading(true));
    return reCreateUser(payload)
      .then((response) => {
        console.log(response);
        dispatch(setLoading(false));
        getUsers();
        navigate("/user");
        alert("Add Success !!");
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoading(false));
        alert(error.response.data.message);
      });
  };
  const updateUserById = (id, payload) => {
    dispatch(setLoading(true));
    return reUpdateUser(id, payload)
      .then((response) => {
        console.log(response);
        dispatch(setLoading(false));
        getUsers();
        navigate("/user");
        alert("Update Success !!");
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoading(false));
        alert(error.response.data.message);
      });
  };

  return { getUsers, createUser, updateUserById };
};
export { useUsers };
