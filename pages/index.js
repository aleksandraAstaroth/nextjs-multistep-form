import Head from 'next/head'
import FormComponent from '../components/FormComponent';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NextJs Multistep Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <FormComponent />
      </main>
    </div>
  )
}
