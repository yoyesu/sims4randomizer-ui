import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NewSimForm from '../components/newsim-form'

export default function NewSim() {
  
    return (
      <>
      <Head>
        <title>Sims 4 Randomizer: New Sim</title>
        <meta name="description" content="Randomizer tool for the simulation game The Sims 4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header>
          <Navbar/>
        </header>

        <h1>New Sim Generator</h1>

        <NewSimForm/>
        
      </main>
      <Footer/>
      </>
    )
}