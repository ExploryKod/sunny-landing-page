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
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                    <Image
                      src={isOpen ? "/mobile/icons/icon-close.svg" : "/mobile/icons/icon-hamburger.svg"}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 text-white"
                      aria-hidden
                    />
                </button>
            </div>
            
            <HeaderMobileNav links={links} isOpen={isOpen} />
        </div>
    );
};