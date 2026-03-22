import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcomment, addreply } from './commentsslice';
import { Formik, useFormik } from 'formik';
import './comments-form.css'


const CommentsForm = (props) => {
    const { comments } = useSelector((state) => state.commentR)
    const dispatch = useDispatch();
    const comment = useFormik({
        initialValues: {
            text: "",
            likes: 0,
            dislikes: 0,
            reply: [],
        },
        onSubmit: (values) => {
            if (props.state) {
                dispatch(addreply({ values, parentindex: (props.parentindex) }));
                props.setstate(!props.state);
            }
            else {
                dispatch(addcomment({ values }));
            }
        }
    })
    return (
        <form className='form' onSubmit={comment.handleSubmit}>
            <input type="text" {...comment.getFieldProps("text")} placeholder='Add a coment...' />
            {/* <textarea ></textarea> */}
            <button type='submit'>send</button>
        </form>
    )
}

export default React.memo(CommentsForm)