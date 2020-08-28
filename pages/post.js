import Layout from '../components/Layout';
import { withRouter } from 'next/router';


const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: "80vw" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi a alias asperiores sit! Aspernatur reprehenderit corporis repellat cumque ea, non modi quo. Nobis quod, a ad at fugiat voluptatibus.</p>
    </Layout>
)

export default withRouter(Post);