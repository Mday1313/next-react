import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="description" content="A site to display my programming portfolio."/>
                    <meta charset="utf-8" />
                    <meta name="robots" content="noindex, nofollow"/>
                    
                    <link rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,200&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                    <style jsx>{`
                        body {
                            font-family: 'Montserrat', sans-serif;
                        }
                    `}</style>
                    
                </body>
            </html>
        )
    }
}