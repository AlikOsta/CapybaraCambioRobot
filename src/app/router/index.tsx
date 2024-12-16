import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router'

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
), { basename: '/CapybaraCambioRobot/' })

export { router, routes }