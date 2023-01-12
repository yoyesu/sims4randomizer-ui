import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NewSimForm from '../components/new-sim/newsim-form'

export default function NewSim() {
  
    return (
      <>
      <Head>
        <title>Sims 4 Randomizer: New Sim</title>
        <meta name="description" content="Randomizer tool for the simulation game The Sims 4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel="icon" href="/plumbob.png" />
      </Head>

      <header>
          <Navbar/>
        </header>
      <main className="main-container d-flex align-items-center flex-column">
        

        <h1>New Sim Randomizer</h1>

        <NewSimForm/>
        
      </main>
      <Footer/>
      
      </>
    )
}