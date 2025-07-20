import React from 'react'
import { useState } from 'react'
import { NavLinks } from '../constants/index'

const Navigation = () => {

    const [isOpen, SetIsOpen] = useState(false)

  return (
    <nav className='min-w-full px-[1rem] md:px-[4rem] flex justify-between items-center mt-[2rem] md:mt-[3rem] z-50'>
        <img src="./logo.png" alt="jadoo logo" className='w-[100px] md:w-[115px] '/>
        <div className={`hidden lg:flex items-center justify-center  text_secondary font-sans font-medium `}>
            {NavLinks.map((items)=>(
                <a key={items.id} className={` mx-[2rem] cursor-pointer ${items.id == 6 ? 'border-[1px] px-5 py-2 rounded-[5px] ': ''}`}>{items.title}</a>
            ))}

            <select name="EN" id="" className='outline-0 mx-[2rem]'>
                <option value="EN">EN</option>
                <option value="GE">GE</option>
                
            </select>
        </div>

        <div className={`${isOpen ? 'flex flex-col fixed top-[0] right-0 pt-[5rem] pb-3 ':'hidden'} z-50 bg-white lg:hidden items-end w-[105%] justify-center  text_secondary font-sans font-medium `}>
            {NavLinks.map((items)=>(
                <a key={items.id} href={`/` + items.title} className={` mx-[2rem] my-3 lg:my-0 cursor-pointer ${items.id == 6 ? 'border-[1px] px-5 py-2 rounded-[5px] ': ''}`}>{items.title}</a>
            ))}

            <select name="EN" id="" className='outline-0 mx-[2rem]'>
                <option value="EN">EN</option>
                <option value="GE">GE</option>
                
            </select>
        </div>
        <img onClick={()=>SetIsOpen(true)} src="./bx-menu-right.svg" alt="menu" className={`w-[50px] lg:hidden ${isOpen ? 'hidden':'flex'}`} />
        <h1 onClick={()=>SetIsOpen(false)} src="./bx-menu-right.svg" alt="menu" className={`text-4xl lg:hidden rotate-45 cursor-pointer z-50 ${isOpen ? 'flex':'hidden'}`}>+</h1>
        
    </nav>
  )
}

export default Navigation