import { Provider } from 'react-redux'
import store from '../store'
import '../styles/cgdevGlobal.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
