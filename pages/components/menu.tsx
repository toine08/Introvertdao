import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import {FaEthereum} from 'react-icons/fa'

const Menu: NextPage = () => {
  return (
    <div className={styles.menu}>
      <FaEthereum className={styles.logo}/>
      <Link href={"/"}><h1>IntrovertDAO</h1></Link>
        <nav>
            <Link href={"/about"}>About</Link>
        </nav>
    </div>
  )
}

export default Menu
