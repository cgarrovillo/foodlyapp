import { Provider } from 'react-redux'
import store from '../store'

import '../styles/cg.scss'

// Tell NextJS to use a custom <App /> component to use Redux
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
