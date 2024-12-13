"use client";
import React from "react";
import ContactInfo from "./ContactInfo";
import FormSection from "./FormSection";



export default function ContactForm() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2 mb-32">
    <ContactInfo />
    <FormSection />
    </div>
  );
}








