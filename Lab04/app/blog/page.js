import Link from "next/link";

const BlogPage = () => {
    const blogs=[
        {id:1, title:"Blog 1", content:"This is the content of blog 1"},
        {id:2, title:"Blog 2", content:"This is the content of blog 2"},
        {id:3, title:"Blog 3", content:"This is the content of blog 3"},
        {id:4, title:"Blog 4", content:"This is the content of blog 4"},
        {id:5, title:"Blog 5", content:"This is the content of blog 5"},
    ]
    return ( <div className="mt-20 ms-20 me-20">
        <h1 className="mb-10">Blogs Page</h1>
        <p>This is the blogs page</p>
        {blogs.map(blog=>(
            <div key={blog.id} className="border mt-5 p-5 w-25">
                <Link href={`/blog/${blog.id}`}><h3>{blog.title}</h3></Link>
            </div>
        ))}
    </div> );
}
 
export default BlogPage;