import { Suspense, lazy, useEffect } from 'react'
import { routes } from '@/routers'
import { useRoutes } from 'react-router-dom';
import { useAppSelector } from '@/utils/hooks';
import { scrollPageTitle } from '@/utils/common';
import Demo from '@/pages/demo'
// const LazyDemo = lazy(() => import('@/pages/demo'))


function App() {
  const router :React.ReactElement<any, string | React.JSXElementConstructor<any>> | null = useRoutes(routes)
  const { 
    WebTitle: title, 
    WebTitleScrollStatus: flag
  } = useAppSelector(state => state.state);
  useEffect(() => {
    scrollPageTitle(title, flag);
  })
  console.log(Demo())


  return (
    <Suspense fallback={ <h2>Loading... 加载中... </h2> } >
      {router}
    </Suspense>
  )
}

export default App
