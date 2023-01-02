import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Footer from './footer'
import useFetch from './customHook'
import Data from './Data'

export default function ResultsContainer({difficulty,lifespan,age,gender,aspiration,job}) {
  
    const { data, loadingState, error } = useFetch('http://localhost:8090/new-sim', difficulty,lifespan,age,gender,aspiration,job);
    console.log("this is the results container", data);
    return (
      <div>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      {data && <Data data={data} />}
      </div>
      
    )
}