import 'tailwindcss/tailwind.css'
import '../src/assets/css/style.css'

function MyApp({ Component, pageProps }) {
  return <div > <Component {...pageProps} /></div>
}

export default MyApp
