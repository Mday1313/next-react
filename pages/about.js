import Error from './_error';
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';

export default class About extends Component {
 
    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/Mday1313");
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, statusCode};
    }

    render() {
        const { user, statusCode } = this.props;

        if ( statusCode ) {
            return <Error statusCode={statusCode} />
        }        
        console.log(user)
        return (
            <Layout title={user.name}>
                <p>{user.bio}</p>
                <p>{user.location}</p>
                <Link href="/">
                    <button> Go to Home</button>
                </Link>
                <img width="300px" src={user.avatar_url} alt="Melissa"/>
            </Layout>
        )
    }
}
