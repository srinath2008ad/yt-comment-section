import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
}

export const commentsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addcomment: (state, action) => {
            state.comments.push(action.payload.values);
        },
        addreply: (state, action) => {
            state.comments[action.payload.parentindex].reply.push(action.payload.values);
        },
        addlike: (state, action) => {
            state.comments[action.payload.parentindex].likes+=1;
        },
        addreplylike:(state,action)=>{
            state.comments[action.payload.parentindex].reply[action.payload.replyindex].likes+=1;
        },
        adddislike: (state, action) => {
            state.comments[action.payload.parentindex].dislikes+=1;
        },
        addreplydislike:(state,action)=>{
            state.comments[action.payload.parentindex].reply[action.payload.replyindex].dislikes+=1;
        }
    }
})

export const { addcomment, addreply, addlike, addreplylike ,adddislike,addreplydislike} = commentsSlice.actions;
const replyReducer = commentsSlice.reducer;
const commentReducer = commentsSlice.reducer;
const addlikeReducer = commentsSlice.reducer;
const addreplylikeReducer = commentsSlice.reducer;
const adddislikeReducer = commentsSlice.reducer;
const addreplydislikeReducer = commentsSlice.reducer;

export { commentReducer, replyReducer, addlikeReducer , addreplylikeReducer,adddislikeReducer,addreplydislikeReducer}