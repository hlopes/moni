import type { FC, ReactElement } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'

import type { NextPageWithLayout } from './_app'

import Layout from '~/components/Layout'
import { api } from '~/utils/api'

const Home: NextPageWithLayout = () => {
  const hello = api.example.hello.useQuery({ text: 'from ola' })

  return (
    <>
      <Head>
        <title>Moni</title>
        <meta name="description" content="Money tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p>{hello.data ? hello.data.greeting : 'Loading tRPC query...'}</p>
          <AuthShowcase />
        </div>
      </main>
    </>
  )
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Home

const AuthShowcase: FC = () => {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <div>
      <p>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}
