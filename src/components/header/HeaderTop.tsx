import React from 'react';
import Logo from '../logo/Logo';
import LangSwitch from './LangSwitch';

const HeaderTop = () => {
  return (
    <div className='flex items-center justify-between my-4 lg:mx-20 mx-4 z-50 sticky top-0 bg-gradient-to-r from-secondary/25 to-accentGreen rounded-3xl'>
        <Logo />
        <LangSwitch />
    </div>
  )
}

export default HeaderTop;