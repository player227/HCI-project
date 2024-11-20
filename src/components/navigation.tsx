"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};


const pages: Page[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Photography Services",
    path: "/photographyservices",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Promotions And Offers",
    path: "/promotionsandoffers",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Customer Support",
    path: "/customersupport",
  },
  {
    title: "Account Management",
    path: "/accountmanagement",
  },
  {
    title: "Privacy Policy",
    path: "/privacypolicy",
  },
];

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={pathname === page.path ? "font-extrabold" : ""}
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  return (
    <ul className="flex space-x-4 mb-4">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}
