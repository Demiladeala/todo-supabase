import React from 'react'
import Signup from '../components/Signup'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-white w-full h-screen'>
      <Signup />
    </div>
  )
}

export default page