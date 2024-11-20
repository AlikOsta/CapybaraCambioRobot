import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { Layout, routes } from '@app/router/Layout'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Layout />}>
      {routes
        .filter(({element}) => element)
        .map(({index, path, element}, i) => {
          return index
          ? <Route key={i} index={index} element={element} />
          : <Route key={i} path={path} element={element} />
        })
      }
    </Route>
  </>
), {
  basename: '/capybara-cambio-robot',
  future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    }
})

export { router, routes }