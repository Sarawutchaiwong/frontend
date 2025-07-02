'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-xl"
      style={{
        background: "linear-gradient(90deg,rgb(0, 115, 182) 0%,rgb(0, 115, 182) 100%)",
        borderRadius: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center text-white fw-bold" href="/" style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
          <Image src="/images/logo.png" alt="Logo" width={150} height={60} className="me-2" />
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" aria-current="page" href="/">
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/service">
                <i className="bi bi-gear me-1"></i> Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/contact">
                <i className="bi bi-envelope me-1"></i> Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots"></i> More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">Action</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">Another action</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex ms-lg-3 mt-3 mt-lg-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-none text-dark fw-bold" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}