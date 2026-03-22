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
                <button onClick={handleToggle} className="text-white">
                    <Image src="/mobile/icons/icon-hamburger.svg" alt="Menu" width={24} height={24} />
                </button>
            </div>
            
            <HeaderMobileNav links={links} isOpen={isOpen} />
        </div>
    );
};