import type { FC, ReactElement } from 'react'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'
import { CiBag1, CiRead, CiShoppingCart, CiUser } from 'react-icons/ci'

import type { NextPageWithLayout } from './_app'

import { api } from '~/utils/api'

import Layout from '~/components/Layout'
import Card from '~/components/Card'
import ChatCard from '~/components/ChatCard'

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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <Card
            value="$3.456K"
            label="Total views"
            percentage={0.43}
            icon={<CiRead className="h-6 w-6 fill-primary dark:fill-white" />}
          />
          <Card
            value=" $45,2K"
            label="Total Profit"
            percentage={4.35}
            icon={
              <CiShoppingCart className="h-6 w-6 fill-primary dark:fill-white" />
            }
          />
          <Card
            value="2.450"
            label="Total Product"
            percentage={2.59}
            icon={<CiBag1 className="h-6 w-6 fill-primary dark:fill-white" />}
          />
          <Card
            value="3.456"
            label="Total Users"
            percentage={-0.95}
            icon={<CiUser className="h-6 w-6 fill-primary dark:fill-white" />}
          />
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* <ChartOne />
          <ChartTwo />
          <ChartThree />
          <MapOne />
          <div className="col-span-12 xl:col-span-8">
            <TableOne />
          </div>
          <ChatCard /> */}
          <ChatCard />
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
