import thumb from "@/public/images/about.png";
import Image from "next/image";

const About = () => {
    return ( <div className="mt-20 ms-20">
        <h1 className="mb-10">About Page</h1>
        <p>This is the about page</p>
        <Image src={thumb} alt="about" width={500} height={300} />
    </div> );
}
 
export default About;