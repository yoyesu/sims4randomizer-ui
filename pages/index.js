import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sims 4 Randomizer</title>
        <meta name="description" content="Randomizer tool for the simulation game The Sims 4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plumbob.png" />
      </Head>
      
      <header>
          <Navbar/>
        </header>
      <main className="main-container">
        <div className='banner'>

          <h1>Sims 4 Randomizer</h1>
          <p>Choose a generator!</p>

        </div>
       
      </main>
      <Footer/>
      
    </>
  )
}
