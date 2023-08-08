import { Provider } from 'react-redux';
import '../scss/style.scss'
import { Barlow } from 'next/font/google';
import store from '../redux/store';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// The reason we imported this font like this is because if we added the link to the header we should have made request to google
// to bring us the style. That on slow internet would create an ungly view. So by importing it like this we are self hosting
// the font on our NextJs server and we can set automaticaly a fallback font.
// Also there was no need to actually download the file and import it from our local.

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={barlow.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

export default MyApp
