'use client';
import Carousel from './component/carousel'
import Card from './component/card';

import React from 'react';
import Footer from './component/footer';

export default function Home() {
  return (
  <>
  <Carousel />

    <h1 className='mt-150 p-2 text-center'>Sarawut chaiwong 026</h1>

  <Card />
  <Footer />
  </>
  );
}