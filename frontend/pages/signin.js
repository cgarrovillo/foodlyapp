import React from 'react'
import Head from 'next/head'
import SignInForm from '../components/Forms/SignInForm'
import Logo from '../components/Brand/Logo'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Food Blog | Sign in </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="hero content--shadowed content--rounded portrait">
            <div className="form__container">
              <Logo />
              <h4>Sign in to your account</h4>
              <SignInForm />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
