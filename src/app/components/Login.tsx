"use client";
import axios from 'axios';
import { useFormState } from '../utils/hooks';
import {useMutation, useQueryClient } from 'react-query'
import toast from 'react-hot-toast';
 
type Props = {}



const Login = (props: Props) => {
  const queryClient = useQueryClient();
  const [ state, setProperty ] = useFormState({
      email: "",
      password: "",
  });

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setProperty(event?.target.name, event?.target?.value)
  }

  const mutation = useMutation(LoginForm => {
    return axios.post('/api/login', LoginForm)
  }, {
    onSuccess: (data: any) => {

      console.log({data})
      if(data.data.error) {
        toast.error("error occured")
      } else (
        toast.success('all good')
      )
      queryClient.setQueryData(["signup"], data)
  },
  onError: (err)=>{
    console.log({err})
  }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      email: state.email,
      password: state.password,
    }
    try {
      mutation.mutate(user as any) 
    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div className='w-full bg-center bg-no-repeat '>
       <div className='w-[90%] md:w-[50%] lg:w-[40%] mt-20 mx-auto rounded-xl border border-gray-300 py-6 pb-12'>
            <h1 className='font-semibold text-2xl text-orange-600 text-center '>Sign In</h1>
            <p className='mt-4 text-center '>Continue with <span className='text-orange-400'>Todos</span></p>
       
            <form className='px-5'>

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

                <p
                className='text-sm text-gray-800 flex gap-1 justify-end'
                >Don't have an account yet?  <span className='text-orange-600 hover:underline'><a href="/signUp">Signup</a></span></p>
        
                <div>
                    <button
                    className='py-2 px-5 bg-orange-600 w-full mt-4 cursor-pointer hover:bg-opacity-75' 
                    onClick={handleSubmit}>Continue</button>
                </div>
            </form>
            <div className='flex justify-center my-1 text-sm text-gray-600'>
            {mutation.isLoading && <>Loading..</>}
            {mutation.isError && <>Error</>}
            </div>
          
       </div>
    </div>
  )
}

export default Login