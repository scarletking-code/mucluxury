import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_2fr_2fr_2fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-45' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Premium quality clothing for everyone. Our collection offers style and comfort for all occasions. Shop now and elevate your wardrobe with timeless pieces.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>SHOP</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>Collection</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>mucluxury046@gmail.com</li>
                    <li>+234 812 816 9721</li>
                </ul>
            </div>


        </div>

        <div className="">
            <hr />
            <p className='py-5 text-sm text-center'>@ 2026 MUCLUXURY - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
