import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Form/slice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
