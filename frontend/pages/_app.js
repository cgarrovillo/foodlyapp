import { Provider } from 'react-redux'
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import store from '../store'
import { loadAccount, loadToken } from '../redux/actions/accountActions'

import '../styles/cg.scss'

// Tell NextJS to use a custom <App /> component to wrap our pages with
// things like a Redux Provider or Navbar
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(loadToken())
    store.dispatch(loadAccount())
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
