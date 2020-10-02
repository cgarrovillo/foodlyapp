import Head from 'next/head'
import React from 'react'
import Logo from '../components/Brand/Logo'
import SignInForm from '../components/Forms/SignInForm'

export default function Register() {
  return (
    <>
      <Head>
        <title>Food Blog | Register </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container content--double">
          <div className="double__left">
            <Logo />
          </div>
          <div className="double__right">
            <SignInForm />
          </div>
        </div>
      </main>
    </>
  )
}
