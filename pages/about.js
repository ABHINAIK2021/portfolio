import Head from 'next/head'
import AboutPage from '../components/pages/AboutPage'

export default function About() {
    return (
        <div>
            <Head>
                <title>About | Abhishek Naik</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AboutPage />
        </div>
    )
}
