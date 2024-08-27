import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center mt-1">
        <div className="text-xl leading-4">E-commerce</div>
      </div>
    </Link>
  );
}
