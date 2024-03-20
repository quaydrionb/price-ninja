import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            key="logo"
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p className="nav-logo">
            Price<span className="text-primary-green">Ninja</span>
          </p>
        </Link>
        <a
          href="https://github.com/quaydrionb/price-ninja"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-container bg-white"
        >
          <Image
            src="/assets/icons/github.svg"
            alt="GitHub"
            width={30}
            height={30}
          />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
