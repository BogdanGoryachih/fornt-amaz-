import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../src/assets/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/src/store/store'
import AuthProvider from '@/src/provide/AuthProvider'
import { TypeComponentAuthFields } from '@/src/provide/auth-pages.types'


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})
export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields ) {
  return(
   <QueryClientProvider client={queryClient}>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <AuthProvider Component={{isOnlyUser:Component.isOnlyUser}} >
              <Component {...pageProps} />
           </AuthProvider>
         </PersistGate>
      </Provider>
          
  </QueryClientProvider>
  
)
}
