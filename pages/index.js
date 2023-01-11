import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Randomizers from '../pages/randomizers-desc.json';
import RandomizerDescCard from '../components/randomizer-desc-card';

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
        <div className='banner d-flex align-items-center flex-column'>

          <h1 className='fw-bold' id="h1-homepage">Random Story Prompts <br/>for The Sims 4</h1>
          <small className='fst-italic'>For base game only at the moment</small>
          <p className='cta-homepage'>Choose a randomizer!</p>
          
          <div className='desc-cards-container d-flex justify-content-between flex-wrap'>
          {Randomizers.map((randomizer) => <RandomizerDescCard randomizer={randomizer}/>)}
          </div>
          

        </div>
       
      </main>
      <Footer/>
      
    </>
  )
}
