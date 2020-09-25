import { Provider } from 'react-redux'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import store from '../store'

import '../styles/cg.scss'

// Tell NextJS to use a custom <App /> component to wrap our components/pages with
// things like a Redux Provider or Navbar
export default function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    const a = window.matchMedia('(prefers-color-scheme: dark)')
    if (a.matches) document.body.classList.toggle('dark')
  }

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
