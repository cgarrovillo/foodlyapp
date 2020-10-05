import { Provider, useDispatch } from 'react-redux'

import Footer from '../components/Footer/Footer'
import store from '../store'

import '../styles/cg.scss'

// Tell NextJS to use a custom <App /> component to wrap our pages with
// things like a Redux Provider or Navbar
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
