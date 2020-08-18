import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="Home">
        <h1>Welcome to the page</h1>
        <Link href="/about">
            <a> Go to About</a>
        </Link>
    </Layout>

   
)

export default Index;