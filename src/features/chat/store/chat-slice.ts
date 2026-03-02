import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatSlice {
  isOpen: boolean;
  unreadCount: number;
}

export const initialState: ChatSlice = {
  isOpen: false,
  unreadCount: 0,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;

      if (action.payload) {
        state.unreadCount = 0;
      }
    },
    incrementUnreadCount: (state) => {
      state.isOpen && state.unreadCount++;
    },
  },
});

export const { setOpen, incrementUnreadCount } = chatSlice.actions;
export default chatSlice.reducer;
