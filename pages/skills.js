import Head from 'next/head'
import SkillsPage from '../components/pages/SkillsPage'

export default function Skills() {
    return (
        <div>
            <Head>
                <title>Skills</title>
                <meta name="description" content="Skills" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SkillsPage />
        </div>
    )
}
