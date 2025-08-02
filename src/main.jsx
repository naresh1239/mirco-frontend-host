import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
const App = React.lazy(() => import('./App'));
import './index.css'

const Loader = ()=>{
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center'>
      <h1 className='text-2xl font-bold'>Loading...</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loader/>}>
    <App />
    </Suspense>

,
)
