import Head from 'next/head'
import ContactPage from '../components/pages/ContactPage'

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactPage />
        </div>
    )
}
