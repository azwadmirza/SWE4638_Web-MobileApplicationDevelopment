const Comments = async({promise}) => {
    const comments=await promise;
    console.log(comments)
    return ( <div>
        <h2 className="mt-5 mb-5">Comments</h2>
        <ul>
            {comments.map((comment)=>(
                <li key={comment.id}>{comment.body}</li>
            ))}
        </ul>
    </div> );
}
 
export default Comments;