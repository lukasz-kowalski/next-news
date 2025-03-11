"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
}

export default function NavLink({ href, children }: PropsWithChildren<Props>) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
