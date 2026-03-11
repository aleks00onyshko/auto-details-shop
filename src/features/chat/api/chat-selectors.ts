import {RootState} from '@store';

export const selectIsOpen = (state: RootState) => state.chat.isOpen;
