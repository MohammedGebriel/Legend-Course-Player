import React from 'react';
import SingleComment from './SingleComment';
import SendComment from './SendComment';
export default function Comments({comments}) {
    return (
        <div id='comments'>
        <h1 className="mb-[20px] font-semibold text-2xl">Comments</h1>
        <div>
            {comments?.map((comment) => {
                return <SingleComment
                key={comment.id}
                image={comment.studentImage}
                name={comment.studentName}
                date={comment.commentDate}
                comment={comment.content}
                />
            })}
            
        </div>

        <SendComment />
        </div>
    );
}
