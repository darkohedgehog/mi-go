import dynamic from 'next/dynamic';
import React from 'react';

const TermsOfUse = dynamic(() => import('@/components/_terms/TermsOfUse'));

const TermsPage = () => {
  return (
    <>
      <TermsOfUse />
    </>
  )
}

export default TermsPage;