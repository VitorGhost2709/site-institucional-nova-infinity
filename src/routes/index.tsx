import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { Agregados } from '../pages/Agregados'
import { Catalogo } from '../pages/Catalogo'
import { Cliente } from '../pages/Cliente'
import { Contato } from '../pages/Contato'
import { EmpresasParceiras } from '../pages/EmpresasParceiras'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { PoliticaPrivacidade } from '../pages/PoliticaPrivacidade'
import { QuemSomos } from '../pages/QuemSomos'
import { Representantes } from '../pages/Representantes'
import { RelatorioTransparencia } from '../pages/RelatorioTransparencia'
import { Servicos } from '../pages/Servicos'
import { TrabalheConosco } from '../pages/TrabalheConosco'
import { ScrollToTop } from './ScrollToTop'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'quem-somos', element: <QuemSomos /> },
      { path: 'servicos', element: <Servicos /> },
      { path: 'catalogo', element: <Catalogo /> },
      { path: 'trabalhe-conosco', element: <TrabalheConosco /> },
      { path: 'politica-de-privacidade', element: <PoliticaPrivacidade /> },
      { path: 'relatorio-transparencia', element: <RelatorioTransparencia /> },
      { path: 'empresas-parceiras', element: <EmpresasParceiras /> },
      { path: 'cliente', element: <Cliente /> },
      { path: 'representantes', element: <Representantes /> },
      { path: 'agregados', element: <Agregados /> },
      { path: 'contato', element: <Contato /> },
    ],
  },
])

