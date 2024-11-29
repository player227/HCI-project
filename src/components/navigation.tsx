"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import pages, { type Page } from "@/resources/ia";

function processPage(page: Page, pathname: string): JSX.Element {
  const isActive = pathname === page.path;
  const isParentActive = pathname.startsWith(page.path) && page.path !== "/";

  return (
    <li key={page.path} className="mb-2">
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


export function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {pages.map((page) => processPage(page, pathname))}
    </ul>
  );
}
