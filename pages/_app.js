import Layout from '../components/Layout'
import '../styles/globals.css'
import { motion } from "framer-motion"
function MyApp({ Component, pageProps, router }) {
  return(
    <motion.div
    key={router.route}
    initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      transition={{ type: 'linear' }}
      >
         
      <Layout> 
        <Component {...pageProps} />
      </Layout>
      </motion.div>)
}

export default MyApp
