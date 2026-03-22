"use client";

import { useState } from "react";
import { HeaderMobileNav } from "./HeaderMobileNav";
import Image from "next/image";

export const HeaderMobileContainer = ({
  links,
}: {
  links: { href: string; label: string; pill?: boolean }[];
}) => {
    const [isOpen, setIsOpen] = useState(false);

   
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleToggle}
                  className="text-white"
                  aria-label="Menu"
                  aria-expanded={isOpen}
                >
                    <Image
                      src="/mobile/icons/icon-hamburger.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="size-6"
                      aria-hidden
                    />
                </button>
            </div>
            
            <HeaderMobileNav links={links} isOpen={isOpen} />
        </div>
    );
};