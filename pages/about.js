import Link from 'next/link';

const About = () => (
    <div>
        <h1>The Elusive Grape</h1>
        <p>Deland's Living Room Since 2003</p>
        <Link href="/">
            <btn> Go to Home</btn>
        </Link>
        <img width="300px" src="/static/logo_white.jpg" alt="white logo"/>
    </div>
)
export default About;