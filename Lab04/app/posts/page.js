import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function PostsPage(){
    const posts=await getAllPosts();
    return (
        <div>
            <h1>Posts Page</h1>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}><Link href={`posts/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}