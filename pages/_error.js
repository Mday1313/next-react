import Layout from '../components/Layout';

const Error = ({statusCode}) => (
    <Layout title="Error">
        {statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Sorry, I couldn't find that page.`}
     
    </Layout>

);

export default Error;