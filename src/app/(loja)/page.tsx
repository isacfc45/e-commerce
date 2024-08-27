import CardProduto from "@/components/produto/CardProduto";
import Pagina from "../../components/template/Pagina";
import { produtos } from "@/data/constants/produto";
export default function Home() {
  return (
    <Pagina>
      <div className="flex gap-5 flex-wrap justify-center">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  );
}
