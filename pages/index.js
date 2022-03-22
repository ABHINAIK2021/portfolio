import Head from 'next/head'
import HomePage from '../components/pages/HomePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Abhishek Naik</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
