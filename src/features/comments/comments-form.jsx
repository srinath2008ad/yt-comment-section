import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcomment, addreply } from './commentsslice';
import { Formik, useFormik } from 'formik';
import './comments-form.css'
import { v4 as uuidv4 } from 'uuid';

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
            const newcomment = {
                ...values,
                id:uuidv4()
            }
            if (props.state) {
                dispatch(addreply({values : newcomment, parentindex: (props.parentindex),id:(props.id)}));
                props.setstate(!props.state);
            }
            else {
                dispatch(addcomment({ values : newcomment,id:(props.id)}));
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