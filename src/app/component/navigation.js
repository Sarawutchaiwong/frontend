'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Function to check token and update state
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    // Check immediately on mount
    checkLoginStatus();

    // Listen for storage changes to sync across tabs
    window.addEventListener('storage', checkLoginStatus);

    // Also, re-check on navigation changes
    const handleRouteChange = () => {
      checkLoginStatus();
      setIsNavCollapsed(true); // Collapse navbar on route change
    };

    // The router events are not available on the app router, so we can't use them.
    // Instead, we rely on the storage event and the initial check.

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    Swal.fire({
      icon: 'success',
      title: 'Logged Out',
      text: 'You have been successfully logged out.',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      router.push('/login');
    });
  };

  const closeNavbar = () => {
    if (!isNavCollapsed) {
      setIsNavCollapsed(true);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm border-0 mb-2"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "1rem",
        padding: "0.8rem 1.5rem",
        width: "98%",
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
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" href="/" onClick={closeNavbar}>
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
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" href="/admin/users" onClick={closeNavbar}>
                  Admin
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex align-items-center ms-auto">
            {isLoggedIn ? (
              <button className="btn btn-outline-danger btn-light rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="btn btn-outline-light rounded-pill me-2" onClick={closeNavbar}>
                  Login
                </Link>
                <Link href="/register" className="btn btn-light rounded-pill" onClick={closeNavbar}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
