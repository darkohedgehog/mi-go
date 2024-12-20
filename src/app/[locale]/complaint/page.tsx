import React from 'react';
import dynamic from 'next/dynamic';

const Complaint = dynamic(() => import('@/components/_complaint/Complaint'));

const ComplaintPage = () => {
  return (
    <>
      <Complaint />
    </>
  )
}

export default ComplaintPage;