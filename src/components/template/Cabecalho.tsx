import React from "react";
import Logo from "./Logo";
import Carrinho from "./Carrinho";

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10 text-white">
      <Logo />
      <Carrinho />
    </header>
  );
}
