import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
}

function findobj(state, id) {
    for (let node of state) {
        if (node.id === id) {
            return node;
        }
        if (node.reply && node.reply.length > 0) {
            const found = findobj(node.reply, id);
            if (found) return found;
        }
    }
    return null;
}

export const commentsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addcomment: (state, action) => {
            state.comments.push(action.payload.values);
        },
        addreply: (state, action) => {
            // state.comments[action.payload.parentindex].reply.push(action.payload.values);
            findobj(state.comments,action.payload.id).reply.push(action.payload.values);
        },
        addlike: (state, action) => {
            // state.comments[action.payload.parentindex].likes+=1;
            findobj(state.comments,action.payload.id).likes+=1
        },
        adddislike: (state, action) => {
            findobj(state.comments,action.payload.id).dislikes+=1
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