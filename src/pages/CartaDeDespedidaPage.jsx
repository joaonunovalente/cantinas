import Article from "../components/common/Article";

import Hero from "../components/article/Hero";
import MainContent from "../components/carta-de-despedida/MainContent";

function CartaDeDespedidaPage() {
  return (
    <Article
      hero={
        <Hero
          title="Mais Informações"
          description="Uma mensagem final para todos os utilizadores do Cantinas.pt"
        />
      }
    >
      <MainContent />
    </Article>
  );
}

export default CartaDeDespedidaPage;