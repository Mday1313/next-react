import Link from 'next/link';

const Layout = ( { children, title, subtitle } ) => (
    <div>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact-us"><a>Contact Us</a></Link>
        </header>

        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
            .root {
                display: flex,
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header {
                width: 100%;
                display: flex;
                justify-content:space-around;
            }
        `}</style>
    </div>
)

export default Layout;