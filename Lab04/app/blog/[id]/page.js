import { notFound } from "next/navigation";

const PageOfBlogs = ({params}) => {
    const {id,title,content}=params;
    if(id>=5){
        notFound();
    }
    return ( 
        <div>
            <h1>Page of Blogs {id}</h1>
        </div>
     );
}
 
export default PageOfBlogs;