import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  profile: {
    jobTitle: "",
    currectLocation: "",
    email: "",
    brainFirst: {
      one: "",
      two: "",
      three: "",
    },
    introduction: "",
  },
  skills: [
    {
      name: "",
      level: "",
    },
  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
});

export const {} = formSlice.actions;

export default formSlice.reducer;
