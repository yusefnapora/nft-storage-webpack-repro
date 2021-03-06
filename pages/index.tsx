import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { NFTStorage } from 'nft.storage'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          Press to upload a test file:
          <button type="button" onClick={() => testUpload()}>Press me</button>
        </div>
      </main>

    </div>
  )
}



async function testUpload() {
  const token = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN
  if (!token) {
    throw new Error(`add NEXT_PUBLIC_NFT_STORAGE_TOKEN to .env.local`)
  }
  
  const data = 'Testing metaplex upload: ' + new Date().toISOString()
  const f = new File([data], 'test-upload.txt', { type: 'text/plain' })

  console.log('uploading test file')
  const client = new NFTStorage({token})
  const cid = await client.storeDirectory([f])
  console.log('upload complete. cid: ', cid)
}


export default Home
