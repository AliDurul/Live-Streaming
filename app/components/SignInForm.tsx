'use client'
import React, { useCallback, useState } from 'react'
import Input from './Input'
import { SocialAuth } from './SocialAuth'


const SignInForm = () => {

  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [variant, setVariant] = useState('Login')

  const toggleVariant = useCallback(() => {
    setVariant((cv) => cv === 'Login' ? 'Register' : 'Login')
  }, [])

  return (
    <div className="mx-auto w-full max-w-sm ">
      <div className='text-center'>
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-white ">
          {variant === 'Login' ? 'Sign in to your account' : 'Create an account'}
        </h2>
        <p className="mt-2 text-sm leading-6 text-white">
          {variant === 'Login' ? 'New to us?' : 'Already a member?'}{' '}
          <button type='button' onClick={toggleVariant} className="font-semibold text-orange-400 hover:text-orange-500">

            {variant === 'Login' ? 'Start a 7 day free trial' : 'Login to your account'}
          </button>
        </p>
      </div>

      <div className="mt-10 text-white">
        <div>
          <form action="#" method="POST" className="space-y-6">

            {variant === 'Register' && (
              <Input
                label='User Name'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserName(e.target.value) }}
                id='userName'
                value={userName}
                type='userName'
              />
            )}
            <Input
              label='Email'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
              id='email'
              value={email}
              type='email'
            />
            <Input
              label='Password'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
              id='password'
              value={password}
              type='password'
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-white">
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <a href="#" className="font-semibold text-orange-400  hover:text-orange-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                {variant === 'Login' ? 'Sign in' : 'Register'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6 ">
              <span className="bg-neutral-700 px-6 ">Or continue with</span>
            </div>
          </div>
          <SocialAuth />
        </div>
      </div>
    </div>
  )
}

export default SignInForm