import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar/Navbar'

// Tell NextJS to use a custom `Document`, to add globally shared components like a Navbar
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
