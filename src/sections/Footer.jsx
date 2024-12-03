import React from 'react'
import { footerLogo, headerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col '>
        <div className='flex flex-col items-start'>
          <a href="/">
          <img src={footerLogo} alt="nike Logo" width={150} height={46}  />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get Shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'> 
            {socialMedia.map((icon)=>(
              <div className={`bg-white rounded-full h-12 w-12 flex justify-center cursor-pointer ${icon.alt == 'facebook logo' ? `hover:bg-blue-700` : `` } ${icon.alt == 'twitter logo' ? `hover:bg-blue-700` : ``} ${icon.alt == 'instagram logo' ? `hover:bg-gradient-to-r from-yellow-500 via-purple-950 to-orange-500 `: ``} `} key={icon.alt}>
                <img src={icon.src} alt={icon.alt} h
                height={24} width={24} />
              </div>
            ))}
          </div>

          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks?.map((section)=>(
              <div key={section}>
                <h4 className='text-white font-montserrat text-2xl font-medium mt-6'>{section?.title}</h4>
                {console.log(section?.links)}
                <ul>
                  {section?.links?.map((link)=>(
                    <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer' key={link?.name}>
                      <a href={'/'}>{link?.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="copy right sign" height={20} width={20} className='rounded-full m-0' />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer