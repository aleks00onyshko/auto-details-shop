import { RootState } from '@store/index';

export const selectIsOpen = (state: RootState) => state.chat.isOpen;
