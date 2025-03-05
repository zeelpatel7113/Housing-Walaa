"use client"

import Footer from '@/app/components/Footer';
import { Navbar, ProductDetails } from '../../components'

// import Footer from "@/app/components/Footer";
import React from "react";
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { MessageCircle, MessageCircleCode } from 'lucide-react';

const page = async () => {
  const { slug }:any = useParams();
  const products = await client.fetch(groq `*[_type=="product"]`);
  const product = products.find((product:any)=>product.slug.current == slug);
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("I am Interested to Buy a Property");
    window.open(`https://wa.me/+919510774987?text=${message}`, '_blank');
  };
  return <div>
    <Navbar/>
    <ProductDetails product={product}/>
    {/* WhatsApp Button */}
    <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-3 bg-black/75 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </button>
    <Footer/>
  </div>;
};

export default page;
