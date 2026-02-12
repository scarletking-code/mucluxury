import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.logo} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>At MUC LUXURY, we believe style is a language. Every outfit tells a story of power, purpose, and presence. Our approach is intentional - designed to elevate individuality while maintaining timeless luxury.</p>
          <p>At MUC LUXURY, we experiment with designs that appeal to both celebrities and everyday individuals, creating a unique blend of high fashion and accessible luxury. Our notable clientele includes some of Nigeria's biggest entertainers like P-SQUARE, B-RED, ICE PRINCE, DJ NEPTUNE, TERRY APALA, and DUNCAN MIGHTY.</p>
          <b className="text-gray-800">OUR MISSION</b>
          <p className="">At MUC LUXURY, our mission is to redefine modern elegance for individuals who lead with confidence, purpose, and style. We create refined, high-quality fashion that blends timeless craftsmanship with contemporary design—pieces that speak softly yet command attention. We believe luxury is not about excess, but intention. Every detail, fabric, and silhouette is thoughtfully curated to empower individuals to express their individuality, elevate their presence, and move through the world with quiet authority. MUC LUXURY exists for those who value distinction, authenticity, and effortless sophistication — today and beyond.</p>
        </div>
      </div>

      <div className="text-xl py-4">
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance:</b>
          <p className='text-gray-600'>Every piece is crafted with meticulous attention to detail, ensuring the highest standards of quality and durability.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convenience:</b>
          <p className='text-gray-600'>Enjoy seamless shopping experiences with our user-friendly platform, fast delivery options, and easy returns.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated team is here to assist you every step of the way, from browsing our collection to ensuring your satisfaction with every purchase.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
