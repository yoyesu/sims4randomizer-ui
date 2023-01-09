import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from "next/router";
import Generators  from './generators.json'
import Link from 'next/link'

import Generator from '../components/individual-generators/generator'
import { useState } from 'react';

export default function IndividualRandomizers() {
  const router = useRouter();
  const {id} = router.query;
  const [isRun,setIsRun] = useState(false);
  const [numberOfSims,setNumberOfSims] = useState("0");
  

  const handleResult = () => {
    setIsRun(true);
    setNumberOfSims(Math.floor(Math.random() * 8) + 1); //from 1 to 8
    
  };
  
    return (
      <>
      <Head>
        <title>Sims 4 Randomizer: Individual Randomizers</title>
        <meta name="description" content="Randomizer tool for the simulation game The Sims 4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plumbob.png" />
      </Head>
      <main className="main-container">
        <header>
          <Navbar/>
        </header>
        <div className="container">
            <h1> All Generators </h1>
            <Generator generator={Generators[0]}/>
            <Generator generator={Generators[1]}/>

            <div className="projects">
            <div className="project" key="3">
            <h2>Number of Sims</h2>
            {isRun && <p>{numberOfSims}</p>}
            <button onClick={handleResult}>Get number</button>
      </div>
    </div>
        </div>
      
      </main>
      <Footer/>
      </>
    )
}