import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function CarrinhoVazio() {
  return (
    <div className="flex flex-col items-center gap-4">
      <IconShoppingCartOff size={150} stroke={0.5} />
      <div>
        <h2 className="text-3x1">Seu carrinho está vazio</h2>
        <p>Adicione produtos clicando no </p>
      </div>
      <Link href="/" className="bg-green-500 text-black rounded-sm px-5 py-3">
        Ver produtos
      </Link>
    </div>
  );
}
