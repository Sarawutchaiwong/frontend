import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './component/navigation';


export const metadata = {
  title: "Next.js App",
  description: "A Next.js application with custom fonts and Bootstrap",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid pt-3 ">
          <div className="row">
            <div className="col-12">
        <Navigation />
            </div>
          </div>
        {children}
        </div>
      </body>
    </html>
  );
}
