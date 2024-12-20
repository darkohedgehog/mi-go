import React from 'react';
import dynamic from 'next/dynamic';

const Privacy = dynamic(() => import('@/components/_privacy/Privacy'));
const CookiesStatement = dynamic(() => import('@/components/_privacy/CookiesStatement'));

const PrivacyPage = () => {
  return (
    <>
      <Privacy />
      <CookiesStatement />
    </>
  )
}

export default PrivacyPage;