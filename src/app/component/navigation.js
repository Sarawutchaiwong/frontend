'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navbarToggler = useRef(null);
  const router = useRouter();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const closeNavbar = () => {
    if (!isNavCollapsed) {
      setIsNavCollapsed(true);
      // Manually trigger the collapse if it's open
      if (navbarToggler.current) {
        navbarToggler.current.click();
      }
    }
  };

  useEffect(() => {
    // Close navbar on route change
    const handleRouteChange = () => {
      closeNavbar();
    };

    router.events?.on('routeChangeComplete', handleRouteChange);
    router.events?.on('routeChangeError', handleRouteChange);

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
      router.events?.off('routeChangeError', handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm border-0 mb-2"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "1rem",
        padding: "0.8rem 1.5rem",
        width: "98%",
        alignItems: "center",
        margin: "0 auto",
        color: "white"
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" href="/" onClick={closeNavbar}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={70}
            height={50}
            className="me-2"
            style={{ objectFit: "contain" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
          ref={navbarToggler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 p-2"> {/* Removed ms-auto */}
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" aria-current="page" href="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" href="/service" onClick={closeNavbar}>
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" href="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" href="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
          </ul>

          
          <form className="d-flex ms-auto p-2" role="search">
  <input className="form-control rounded-pill me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-light rounded-pill" type="submit">Search</button>
</form>

          <li className="btn btn-outline-light rounded-pill">
              <Link className="nav-link" href="/login" onClick={closeNavbar}>
                <i className="bi bi-person-plus"></i> Register/Login
              </Link>
            </li>
        </div>
      </div>
    </nav>
  );
}