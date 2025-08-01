'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-5 mt-5 shadow-sm" style={{ borderRadius: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <Link href="/" className="d-inline-block mb-3">
                <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
            </Link>
            <p className="text-white-50">
              Discover a world of expressions. Your one-stop destination for unique and fun face assets.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase fw-bold mb-4">Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link href="/" className="text-white-50 text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/service" className="text-white-50 text-decoration-none">Service</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-white-50 text-decoration-none">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white-50 text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase fw-bold mb-4">Follow Us</h5>
            <div>
              <a href="#" className="text-white-50 me-3 text-decoration-none fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white-50 me-3 text-decoration-none fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white-50 me-3 text-decoration-none fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase fw-bold mb-4">Newsletter</h5>
            <p className="text-white-50">Subscribe to get our latest updates.</p>
            <form action="#">
              <div className="input-group">
                <input type="email" placeholder="Your email" aria-label="Your email" className="form-control" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-top pt-4 mt-5">
          <p className="text-center text-white-50 mb-0">© 2025 Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
