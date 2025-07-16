'use client';
import Carousel from './component/carousel'
import Card from './component/card';

import React from 'react';
import Dashboard from './dashboard/page';


export default function Home() {
  return (
  <>
  <Dashboard />
  <Carousel />

    <h1 className='mt-150 p-4 text-center'>Category</h1>

  <Card />
  
  </>
  );
}