import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  message: string;
  type: string;
}

const initialState: AlertState = {
  message: '',
  type: '',
};

const AlertSlice = createSlice({
  name: "alert",
  initialState,
    reducers: {
    setAlert: (state, action) => {
      (state as { message: string; type: string }).message = action.payload.message;
      (state as { message: string; type: string }).type = action.payload.type;
    },
    clearAlert: (state) => {
      (state as { message: string; type: string }).message = "";
      (state as { message: string; type: string }).type = "";
    },
  },
});
export const { setAlert, clearAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
