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
  
    return (
      <>
      <Head>
        <title>Sims 4 Randomizer: Individual Randomizers</title>
        <meta name="description" content="Randomizer tool for the simulation game The Sims 4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel="icon" href="/plumbob.png" />
      </Head>
      <main className="main-container">
        <header>
          <Navbar/>
        </header>
        <div className="d-flex align-items-center flex-column">
            <h1> All Randomizers </h1>
            <div className='individual-randomizer-card-container d-flex justify-content-between flex-wrap'>
            {Generators.map((gen) => <Generator generator={gen} key={gen.id}/>)}
            
    </div>
        </div>
      
      </main>
      <Footer/>
      </>
    )
}