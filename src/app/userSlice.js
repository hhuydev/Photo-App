import userApi from "api/userApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunkApi) => {
    const currentUser = await userApi.getMe();
    return currentUser;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMe.rejected]: (state, action) => {
      state.current = action.payload;
      state.isLoading = false;
      state.error = "Error";
    },
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;
