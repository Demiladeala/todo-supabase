"use client";
import React, { ChangeEvent, MouseEventHandler, useState } from 'react'
import axios from 'axios';
import { useFormState } from '../utils/hooks';

type Props = {}

const Signup = (props: Props) => {
    const [ state, setProperty ] = useFormState({
        email: "",
        password: "",
    })

    const handleInputChange = (
        event:React.ChangeEvent<HTMLInputElement>) => 
    {
        setProperty(event?.target.name, event?.target?.value);
    }
    
      const handleSubmit =  async (e: React.FormEvent) => {
        e.preventDefault();
        const user = {
            email: state.email,
            password: state.password,
        }
        try {
            const response = await axios.post("/api/signup", user);
        } catch (error) {
            
        }
      }
  return (
    <div className='w-full bg-center bg-no-repeat '>
       <div className='w-[90%] md:w-[50%] lg:w-[40%] mt-20 mx-auto rounded-xl border border-gray-300 py-6 pb-12'>
            <h1 className='font-semibold text-2xl text-orange-600 text-center '>Create Account</h1>
            <p className='mt-4 text-center '>Sign up to <span className='text-orange-400'>Todos</span></p>
       
            <form className='px-5' onSubmit={handleSubmit}>
                <p className='font-semibold mt-3'>Email</p>
                <input
                onChange={handleInputChange} 
                type='email'
                name='email'
                value={state.email}    
                placeholder='example@mail.com'
                className='outline-none border border-gray-200 w-full rounded my-2 p-2 text-sm' />
        
                <p className='font-semibold mt-3'>Password</p>
                <input 
                type="password"
                name='password'
                value={state.password}
                onChange={handleInputChange} 
                placeholder='Enter your password'
                className='outline-none border border-gray-200 w-full rounded my-2 p-2 text-sm' />
        
                <div>
                    <button
                    className='py-2 px-5 bg-orange-600 w-full mt-4 cursor-pointer hover:bg-opacity-75' 
                    type='submit'>Continue</button>
                </div>
            </form>
       </div>
    </div>
  )
}

export default Signup