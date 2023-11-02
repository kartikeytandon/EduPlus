import React from 'react'
import './Landing.css'
import EduLogo from '../../assets/Edu+Logo.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section id='landingSection'>
        <div className='w-fit mx-auto pt-16'>
            <img src={EduLogo} alt="" />
            <div id='loginBox' className='p-4 my-12 mx-4'>
                <h4 className='text-2xl text-center p-2'>Login As</h4>
                <div className='flex flex-col'>
                    <button className='text-xl px-5 py-2 my-2 mx-auto w-36'>
                        <Link to='/studentLogin'>
                            Student
                        </Link>
                    </button>
                    <button className='text-xl px-5 py-2 my-2 mx-auto w-36'>
                        <Link to='/facultyLogin'>
                            Faculty
                        </Link>
                    </button>
                    <button className='text-xl px-5 py-2 my-2 mx-auto w-36'>
                        <Link to='/adminLogin'>
                            Admin
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Landing