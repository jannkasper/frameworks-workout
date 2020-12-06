
function Comment ({ comments }) {
    return (
        <ul>
            {comments.map(comment => (<li key={comment.id}>{comment.body}</li>))}
        </ul>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { comments: data } };
}

export default Comment
