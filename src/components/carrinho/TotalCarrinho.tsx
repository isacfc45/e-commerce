import ItemCarrinho from "@/data/model/ItemCarrinho";

export interface TotalCarrinhoProps {
  itens: ItemCarrinho[];
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
  const total = props.itens.reduce(
    (total, item) => total + item.produto.preco * item.quantidade,
    0
  );
  return (
    <div className="flex justify-between items-center bg-gray-300 p-5 rounded-md p-7">
      <div className="flex flex-col justify-between">
        <span className="text-lg font-bold">Total</span>
        <span className="text-2xl font-bold text-yellow-500">
          R$ {total.toFixed(2)}
        </span>
      </div>
      <button className="bg-green-600 px-4 py-2 rounded-md text-xl">
        Finalizar
      </button>
    </div>
  );
}
