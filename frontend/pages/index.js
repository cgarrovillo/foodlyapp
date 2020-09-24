import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import Button from '../components/Interaction/Button'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="hero">
            <h1>The next generation of food blogs.</h1>
            <Button>
              <Link href="/blogs">View Blogs</Link>
            </Button>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <h1>The next generation of food blogs.</h1>
            <Button>View Blogs</Button>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <h1>The next generation of food blogs.</h1>
            <Button>View Blogs</Button>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <h1>The next generation of food blogs.</h1>
            <Button>View Blogs</Button>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <h1>The next generation of food blogs.</h1>
            <Button>View Blogs</Button>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <h1>The next generation of food blogs.</h1>
            <Button>View Blogs</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
