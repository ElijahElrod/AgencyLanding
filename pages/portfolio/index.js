import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import PortfolioContent from '../../components/portfolio/PortfolioContent';
import Layout from '../../components/Layout';

export default function Portfolio() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Shösansei Software | Project Portfolio</title>
                <meta name="description" content="Projects completed by the Shosansei Software Agency" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Layout>
                    <PortfolioContent />
                </Layout>


            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
