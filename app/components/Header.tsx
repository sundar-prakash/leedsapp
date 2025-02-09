import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-6 px-6">
      <Link href="/">
        <Image src="/header.png" alt="LeadsApp" width={200} height={40} />
      </Link>
    </header>
  );
};

export default Header;
