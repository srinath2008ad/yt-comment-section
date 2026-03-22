import React,{useState} from 'react'
import CommentsForm from './comments-form'
import { useSelector } from 'react-redux'
import Gencomments from './gencomments'

const Allcomments = () => {
    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0);
    const { comments } = useSelector((state) => state.commentR)
    return (
        <div>
            <CommentsForm like = {like} dislike = {dislike} setlike = {setlike} setdislike = {setdislike}/>
            {
                comments.map((comment, i) => {
                    return <Gencomments onecomment={comment} key={i} parentindex={i} />
                })
            }
        </div>
    )
}

export default React.memo(Allcomments)
