import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ServicosBorracharia from "../pages/ServicosBorracharia";
import ProdutosBar from "../pages/ProdutosBar";
import ProdutosSorveteria from "../pages/ProdutosSorveteria";

const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/servicosBorracharia', element: <ServicosBorracharia />},
    {path: '/produtosBar', element: <ProdutosBar />},
    {path: '/produtosSorveteria', element: <ProdutosSorveteria />},
])

export default router