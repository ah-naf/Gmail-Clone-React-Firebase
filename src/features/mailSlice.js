import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    }
  },
  extraReducers: {}
});

export const {openSendMessage, closeSendMessage, selectMail} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
