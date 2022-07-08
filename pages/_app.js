import '../styles/globals.scss'
import Layout from '../components/Layout';

//what you want to show up on every page in the layout
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
