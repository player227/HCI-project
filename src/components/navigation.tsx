"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import pages, { type Page } from "@/resources/ia";

function processPage(page: Page, pathname: string): JSX.Element {
  const isActive = pathname === page.path;
  const isParentActive = pathname.startsWith(page.path) && page.path !== "/";

  return (
    <li key={page.path} >
      <Link href={page.path} className={isActive || isParentActive ? "font-extrabold" : ""}>
        {page.title}
      </Link>
      {isParentActive && page.children && (
        <ul className="ml-4">
          {page.children.map((child) => processPage(child, pathname))}
        </ul>
      )}
    </li>
  );
}

// export function Navigation() {
//   const pathname = usePathname();

//   return (
//     <ul className="flex space-x-4 mt-2.5 ml-4">
//       {pages.map((page) => processPage(page, pathname))}
//     </ul>
//   );
// }

export function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-4 mt-2.5 ml-4 items-center text-xl font-playfair">
      {pages.map((page) => (
        <li key={page.path}>
          <Link
            href={page.path}
            className={
              pathname === page.path || (pathname.startsWith(page.path) && page.path !== "/")
                ? "font-extrabold"
                : ""
            }
          >
            {page.title}
          </Link>
          {pathname.startsWith(page.path) && page.children && (
            <ul className="ml-4 absolute">
              {page.children.map((child) => processPage(child, pathname))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}


//////////////////////////////////////////

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Flyout_Navigation = () => {
  return (
    <div className="flex h-[500px] justify-center bg-neutral-900 px-3 py-12">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        Pricing
      </FlyoutLink>
    </div>
  );
};

interface FlyoutLinkProps {
  children: React.ReactNode;
  href: string;
  FlyoutContent: React.ComponentType;
}

const FlyoutLink = ({ children, href, FlyoutContent }: FlyoutLinkProps) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

export default Flyout_Navigation;