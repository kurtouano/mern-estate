import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-md mx-auto'>
      <h1 className='text-3xl text-center font-semibold mt-10 mb-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='p-3 rounded-lg'/> 
        <input type='email' placeholder='Email' className='p-3 rounded-lg'/> 
        <input type='password' placeholder='Password' className='p-3 rounded-lg'/> 
        <button className='bg-DarkBlue text-OffWhite p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex flex-row gap-2 my-3'>
        <text>Have an account? </text>
        <Link to='/sign-in'>
          <text className='text-Cyan font-semibold underline'>Sign In</text>
        </Link>
      </div>
    
    </div>
    
  )
}
