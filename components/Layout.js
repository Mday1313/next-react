import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ( { children, title, subtitle } ) => (
    <div>
        <Head>
            <title>Next Portfolio</title>
        </Head>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact-us"><a>Contact Us</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
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
                width: 50%;
            }
            header {
                width: 100%;
                display: flex;
                justify-content:space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: black;
            }
            header a {
                color: white;
                text-decoration: none;
            }
            header a:hover {
                font-weight: bold;
                color: indigo;
            }
            footer {
                padding: 1em;
                color: #fff;
                background: #4a4a4a;
                text-align: center;
            }
        `}</style>
        <style global jsx>{`
            body: {
                margin: 0;
                font-size: 110%;
                background: #f0f0f0;
            }
        `}</style>
    </div>
)

export default Layout;