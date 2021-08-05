import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WIM | HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Test</h1>
    </div>
  )
}
