import { Suspense } from 'react'
import { routes } from '@/routers'
import { useRoutes } from 'react-router-dom';

function App() {
  const router :React.ReactElement<any, string | React.JSXElementConstructor<any>> | null = useRoutes(routes)
  console.log(router);
  return (
    <Suspense fallback={ <h2>Loading... 加载中... </h2> } >
      {router}
    </Suspense>
  )
}

export default App
