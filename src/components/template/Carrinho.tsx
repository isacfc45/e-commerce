"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons-react";
import useCarrinho from "@/data/hooks/useCarrinho";
export default function Carrinho() {
  const { qtdDeItens } = useCarrinho();
  return (
    <Link href="/carrinho">
      <div className="flex relative">
        <IconShoppingCart size={32} stroke={1} />
        <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-600 rounded-full flex justify-center items-center text-xs">
          {qtdDeItens}
        </div>
      </div>
    </Link>
  );
}
