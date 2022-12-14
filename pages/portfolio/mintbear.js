import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'
import MintbearContent from '../../components/portfolio/projects/MintbearContent'
import { ProjectLayout } from '../../components/portfolio/ProjectLayout'

export default function MintBear() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Shösansei Software | Mintbear Project</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Layout />
                <ProjectLayout>
                   <MintbearContent />
                </ProjectLayout>


            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
