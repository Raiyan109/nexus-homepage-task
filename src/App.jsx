import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import PageProvider from './context/PageProvider'


function App() {

  return (
    <div>
      <PageProvider>
        <RouterProvider router={routes} />
      </PageProvider>
    </div>
  )
}

export default App
