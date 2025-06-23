import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Australian shares versus property!" />
        <p className="description"> </p>
    
    <iframe src="https://designer.spreadsheetweb.com/a/aus-shares-vs-property-v6" width="460" height="800"></iframe>
    
      </main>

      <Footer />
    </div>
  )
}
