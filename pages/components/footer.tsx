import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Foot: NextPage = () => {
  return (
    <div className={styles.footer}>
       <p>Create by&nbsp;<a href="farcaster://profiles/0x8B4510249147C4705e8641262CD34F78325C1a2f">togido</a> @2022 - IntrovertDAO</p>
    </div>
  )
}

export default Foot