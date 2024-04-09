import Link from "next/link";

const TakeLayout = ({children}) => {
    return (  
        <div>
            <nav className="bg-black py-4 px-2">
          <ul className="flex gap-6 text-2xl font-bold">
            <Link href={"/"}><li className="border-white hover:bg-white hover:text-black text-white rounded py-2 px-2">Home</li></Link>
            <Link href={"/create"}><li className="border-white hover:bg-white hover:text-black text-white rounded py-2 px-2">Quiz Creation</li></Link>
            <Link href={"/take"}><li className="border-white hover:bg-white hover:text-black text-white rounded py-2 px-2">Take Quiz</li></Link>
          </ul>
        </nav>
            <h1 className="mt-20 text-4xl font-bold">Take Quiz</h1>
            {children}
        </div>
    );
}
 
export default TakeLayout;