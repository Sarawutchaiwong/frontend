'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';


export default function Card() {
  useEffect(() => {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
    }
  , []);
  return (

  <div className="row justify-content-center">
    
<div className="col-md-2 mb-4">
<div className="card shadow-sm">    
  <Image className="rounded img-responsive" src="/images/roblox.png" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-primary">Home</h5>
    <a href="#" className="btn btn-primary btn-sm">Learn More</a>
  </div>
</div>
</div>

<div className="col-md-2 mb-4">
<div className="card shadow-sm">    
  <Image className="rounded img-responsive" src="/images/roblox2.png" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-success">Service</h5>
    <a href="#" className="btn btn-success btn-sm">Learn More</a>
  </div>
</div>
</div>

<div className="col-md-2 mb-4">
<div className="card shadow-sm">    
  <Image className="rounded img-responsive" src="/images/roblox3.png" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-warning">About</h5>
    <a href="#" className="btn btn-warning btn-sm text-white">Learn More</a>
  </div>
</div>
</div>

<div className="col-md-2 mb-4">
<div className="card shadow-sm">    
  <Image className="rounded img-responsive" src="/images/roblox4.png" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-danger">Service</h5>
    <a href="#" className="btn btn-danger btn-sm">Learn More</a>
  </div>
</div>
</div>

  </div>
  )
}