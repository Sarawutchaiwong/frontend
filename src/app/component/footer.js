'use client';
import { useEffect } from 'react';
import Link from 'next/link';


export default function Footer() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
, []);


  return (
    <footer className="py-3 my-4">
  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Home</Link></li>
    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Features</Link></li>
    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Pricing</Link></li>
    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">FAQs</Link></li>
    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">About</Link></li>
  </ul>
  <p className="text-center text-muted">© 2025 Company, Inc</p>
</footer>

  );
}