import { configureStore } from '@reduxjs/toolkit'
import {commentReducer,replyReducer,addlikeReducer,addreplylikeReducer,adddislikeReducer,addreplydislikeReducer} from '../features/comments/commentsslice';

export const store = configureStore({
  reducer: {
    commentR : commentReducer,
    replyR : replyReducer,
    likeR : addlikeReducer,
    replylikeR : addreplylikeReducer,
    dislikeR : adddislikeReducer,
    replydislikeR : addreplydislikeReducer
  },
})

export default store;