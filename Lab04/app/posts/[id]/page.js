import getAllComments from "@/lib/getAllComments";
import getOnePost from "@/lib/getOnePost";
import { Suspense } from "react";
import Comments from "../components/Comments";
import { Loader } from "../components/loader";

export const generateMetadata = async ({ params }) => {
    const { id } = params;
    const post = await getOnePost(id);
    return {
        title: post.title,
        description: post.body,
    };
}

export default async function OnePostPage({ params }) {
    const { id } = params;
    const post = await getOnePost(id);
    console.log(post);
    const commentsPromise=getAllComments(id);
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Suspense fallback={<Loader/>}>
                <Comments promise={commentsPromise} />
            </Suspense>
        </div>
    );
}

export const generateStatisParams = async () => {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        params: {
            id: post.id,
        },
    }));
}