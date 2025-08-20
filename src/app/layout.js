import { Geist, Geist_Mono } from "next/font/google";
import { Kanit } from "next/font/google";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './component/navigation';
import Footer from './component/footer';
import PageTransition from './component/PageTransition';
import BootstrapLoader from './component/BootstrapLoader';

import './background.css';

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
  return (
    <html lang="en">
      <body className={kanit.className}>
        <video autoPlay muted loop className="background-video">
          <source src="/video/bg.mp4" type="video/mp4" />
        </video>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-12 p-2">
              <Navigation />
            </div>
          </div>
          <PageTransition>
            {children}
          </PageTransition>
        </div>
        <Footer />
        <BootstrapLoader />
      </body>
    </html>
  );
}
