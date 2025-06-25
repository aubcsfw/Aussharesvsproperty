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
    <style>
        iframe {
            width: 90%;
            height: 700px;
            border: none;
        }
    </style>
    <iframe src="https://designer.spreadsheetweb.com/a/aus-shares-vs-property-1"></iframe>
    
      </main>

      <Footer />
    </div>
  )
}
