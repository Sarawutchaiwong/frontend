'use client';
import { useEffect } from 'react';
import Link from 'next/link';


export default function Footer() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
, []);


  return (
    <footer className="py-4 mt-5 bg-light border-top">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-body-secondary">
                  Home
                </Link>
              </li>
              
              <li className="nav-item mb-2">
                <Link href="/features" className="nav-link p-0 text-body-secondary">
                  Features
                </Link>
              </li>
              
              <li className="nav-item mb-2">
                <Link href="/pricing" className="nav-link p-0 text-body-secondary">
                  Pricing
                </Link>
              </li>
              
              <li className="nav-item mb-2">
                <Link href="/faqs" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              
              <li className="nav-item mb-2">
                <Link href="/about" className="nav-link p-0 text-body-secondary">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <p className="text-center text-muted mb-0">© 2025 Company, Inc. All rights reserved.</p>
      </div>
    </footer>

  );
}