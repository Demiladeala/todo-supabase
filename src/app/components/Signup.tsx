"use client";
import axios from 'axios';
import { useFormState } from '../utils/hooks';
import {useQuery, useMutation, useQueryClient } from 'react-query'
 
type Props = {}



const Signup = (props: Props) => {
    const queryClient = useQueryClient();
    const [ state, setProperty ] = useFormState({
      name: "",
        email: "",
        password: "",
    });

    // const fetchApiResponsej = async () => {
    //     const response = await axios.get("/api/signup");
    //     return response.data;   

    // }

    //const {isLoading, error, data} = useQuery('fetchResponse', fetchApiResponsej);

    const mutation = useMutation(signupformData => {
        return axios.post('/api/signup', signupformData)
      }, {
        onSuccess: (data) => {
            queryClient.setQueryData(["signup"], data)
        }
      })

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => 
    {
        setProperty(event?.target.name, event?.target?.value);
    }
    
      const handleSubmit =  async (e: React.FormEvent) => {
        e.preventDefault();
        const user = {
            name: state.name,  
            email: state.email,
            password: state.password,
        }
        try {
            //const response = await axios.post("/api/signup", user);
            mutation.mutate(user as any)

        } catch (error) {
            
        }
      }
  return (
    <div className='bg-white w-full bg-center bg-no-repeat '>
       <div className='w-[90%] md:w-[50%] lg:w-[40%] mt-20 mx-auto rounded-xl border border-gray-300 py-6 pb-12'>
            <h1 className='font-semibold text-2xl text-orange-600 text-center '>Create Account</h1>
            <p className='mt-4 text-center '>Sign up to <span className='text-orange-400'>Todos</span></p>
       
            <form className='px-5'>

              <p className='font-semibold mt-3'>Name</p>
                <input
                onChange={handleInputChange} 
                type='text'
                name='name'
                value={state.name}    
                placeholder='Enter your name'
                className='outline-none border border-gray-200 w-full rounded my-2 p-2 text-sm' />

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
                >Have an account already?  <span className='text-orange-600 hover:underline'><a href="/login">Login</a></span></p>
        
                <div>
                    <button
                    onClick={handleSubmit}
                    className='py-2 px-5 bg-orange-600 w-full mt-4 cursor-pointer hover:bg-opacity-75' 
                    type='submit'>Continue</button>
                </div>
            </form>
            {mutation.isLoading && <>Saving in progress</>}
            {mutation.isSuccess && <>Sign up was successfull</>}
       </div>
    </div>
  )
}

export default Signup