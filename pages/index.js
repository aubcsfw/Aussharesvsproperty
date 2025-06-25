import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shares v property</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
  
    <iframe src="https://designer.spreadsheetweb.com/a/aus-shares-vs-property-1" style=”height: 700px; width: 460px; border=0px;”></iframe>
    
      </main>

      <Footer />
    </div>
  )
}
