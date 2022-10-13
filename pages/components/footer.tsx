import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Foot: NextPage = () => {
  return (
    <div className={styles.footer}>
       <p>Create by&nbsp;<a href="https://github.com/toine08">togido</a> @2022 - IntrovertDAO</p>
    </div>
  )
}

export default Foot