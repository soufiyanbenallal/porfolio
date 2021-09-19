import Head from 'next/head'
import { motion } from "framer-motion"

export const MyComponent = () => (
  <motion.div
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
  />
)
export default function Home() {
  return (
    <>
      <Head>
        <title>SOUFIYAN BENALLAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="example-container">
          <MyComponent key={1} />
        </div>
      </main>
    </>
  )
}
