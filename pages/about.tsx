import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Menu from './components/menu'

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>IntrovertDAO - About</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>About this DAO</h2>
        <p className={styles.dao}> IntrovertsDAO is a non-profit decentralized autonomous organization that seeks to build and support a community of introverted people and helping everyone to achived is goal.
In web3 getting a job is easy if you feel confident enough to be a "public person", show your work on your social media, and having attention on yourself. Which is actually the issue for introverted people. As an introverted people I can't do it, don't feel in the right place, feeling judged by anyone.
As an introvert I can't be comfortable with having attention on me and I don't think I'm the only one who wants to work in this wonderful world but because I'm introverted and don't dare to communicate on the networks (fear of judgment, fear of becoming public), I can't do it. That's why I wanted to create IntrovertsDAO, a non-profit decentralized autonomous, organization that aims to create a community and build something and help everyone to achieve these goals.</p>
      </main>
    </div>
  )
}

export default Home
