import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Message} from '../types/message.ts';
import {incrementUnreadCount} from './chat-slice.ts';

const chatBus = new EventTarget();

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({baseUrl: '/'}),
  endpoints: (builder) => ({
    getMessages: builder.query<Message[], void>({
      queryFn: () => ({data: []}),
      async onCacheEntryAdded(
        _,
        {updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch}
      ) {
        const socket = new WebSocket('wss://ws.ifelse.io');
        const sendMessageHandler = (e: any) => {
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(e.detail);
          }
        };

        chatBus.addEventListener('send', sendMessageHandler);

        try {
          await cacheDataLoaded;

          socket.onmessage = (event: MessageEvent) => {
            updateCachedData((draft) => {
              draft.push({
                id: Date.now().toString(),
                text: event.data,
                sender: 'support',
                timestamp: Date.now(),
              } as Message);
            });

            dispatch(incrementUnreadCount());
          };
        } catch (err) {
          // TODO: handle error here
        }

        await cacheEntryRemoved;

        chatBus.removeEventListener('send', sendMessageHandler);
        socket.close();
      },
    }),
    sendMessage: builder.mutation<void, string>({
      queryFn: (text, {dispatch}) => {
        chatBus.dispatchEvent(new CustomEvent('send', {detail: text}));

        dispatch(
          chatApi.util.updateQueryData('getMessages', undefined, (draft) => {
            draft.push({id: Date.now().toString(), text, sender: 'user', timestamp: Date.now()});
          })
        );

        return {data: undefined};
      },
    }),
  }),
});

export const {useGetMessagesQuery, useSendMessageMutation} = chatApi;
