'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Card() {
  return (

  <div className="row justify-content-center">
    
<div className="col-md-2 mb-4">
<div className="card shadow-sm h-100 rounded-4">
  <Image className="card-img-top" src="/images/roblox.png" alt="..." width={200} height={200} />
  <div className="card-body d-flex flex-column">
    <h5 className="card-title text-primary">Happy Face</h5>
    <p className="card-text">cause of happiness.</p>
  </div>
</div>
</div>

<div className="col-md-2 mb-4">
<div className="card shadow-sm h-100 rounded-4">
    <Image className="card-img-top" src="/images/roblox2.png" alt="..." width={200} height={200}/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title text-success">Exiting Face</h5>
    <p className="card-text">cause of interesting.</p>
  </div>
</div>
</div>

<div className="col-md-2 mb-4">
<div className="card shadow-sm h-100 rounded-4">
    <Image className="card-img-top" src="/images/roblox3.png" alt="..." width={200} height={200}/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title text-warning">Handsome Face</h5>
    <p className="card-text">cause of confident.</p>
  </div>
</div>
</div>

<div className="col-md-2 mb-4">
<div className="card shadow-sm h-100 rounded-4">
    <Image className="card-img-top" src="/images/roblox4.png" alt="..." width={200} height={200}/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title text-danger">Crazy face</h5>
    <p className="card-text">cause of not giving self pills.</p>
  </div>
</div>
</div>

  </div>
  )
}