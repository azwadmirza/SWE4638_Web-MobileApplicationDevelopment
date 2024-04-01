import Link from "next/link";

const AboutLayout = ({children}) => {
    return ( 
        <div>
        <nav>
            <li className="flex gap-6">
                <ul><Link href="/about/mission">Mission</Link>
                </ul>
                <ul><Link href="/about/vision">Vision</Link>
                </ul>
            </li>
        </nav>
        <h1>{children}</h1>
        </div>
     );
}
 
export default AboutLayout;