import Link from "next/link";
import React from "react";

export default function container({ children }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <Link href="/" className="navbar-brand mx-4">
            Accueil
          </Link>
          <Link href="/liste" className="navbar-brand mx-4">
            Liste
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
}
