'use client';
import { Geist, Geist_Mono } from "next/font/google";
import { Kanit } from "next/font/google";
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './component/navigation';
import Footer from './component/footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body className={kanit.className} style={{ backgroundColor: 'gray', backgroundImage: 'url(/images/slider1.jpg)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
      }}>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-12 p-2">
              <Navigation />
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
