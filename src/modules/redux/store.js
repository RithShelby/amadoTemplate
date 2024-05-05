import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/core/authSlice";
import userSlice from "../home/core/userSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
  },
});
