import Head from 'next/head'
import ServicesPage from '../components/pages/ServicesPage'

export default function Services() {
    return (
        <div>
            <Head>
                <title>Services | Abhishek Naik</title>
                <meta name="description" content="Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ServicesPage />
        </div>
    )
}
