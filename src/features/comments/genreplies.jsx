import React from 'react'
import Gencomments from './gencomments'

const Genreplies = (props) => {
  return (
    <div>
      <Gencomments parentindex = {props.parentindex} onecomment = {props.reply} childindex = {props.index}/>
    </div>
  )
}

export default React.memo(Genreplies)
