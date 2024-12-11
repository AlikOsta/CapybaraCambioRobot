import './index.scss'
import { ExchangeAppProvider } from '@providers/context'
import { RouterProvider } from 'react-router'
import { router } from '@router'

function App() {
  return (
    <ExchangeAppProvider>
      <RouterProvider router={router} />
    </ExchangeAppProvider>
  )
}

export default App