import { Navbar } from '@/components/nav/Navbar'
import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Shorten and customize your URLs | Just Click On Me</title>
      <meta name="description" content="Shorten and customize your URLs with Just Click On Me" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main style={{
      padding:'0 10rem'
    }}>

      <Navbar/>
      <h1 style={{
        textAlign: 'center', fontSize: '80px', 
        fontWeight:'bold', marginTop:'50px'
      }}>Shorten and<br/>customize your URLs</h1>
    
    </main>
  </>
  
}
