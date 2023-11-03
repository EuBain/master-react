import {Suspense, useEffect } from 'react'
import { routes } from '@/routers'
import { useRoutes } from 'react-router-dom';
import { useAppSelector } from '@/utils/hooks';
import { scrollPageTitle } from '@/utils/common';
import ContextPageTab, { usePageTabs } from '@/context/ContextPageTabs'




function App() {
  const router :React.ReactElement<any, string | React.JSXElementConstructor<any>> | null = useRoutes(routes)
  const { 
    WebTitle: title, 
    WebTitleScrollStatus: flag
  } = useAppSelector(state => state.state);
  useEffect(() => {
    scrollPageTitle(title, flag);
  })
  const pageTabs = usePageTabs()
  



  return (
    <Suspense fallback={ <h2>Loading... 加载中... </h2> } >
      <ContextPageTab.Provider value={pageTabs}>
       {router}
      </ContextPageTab.Provider>
    </Suspense>
  )
}

export default App
