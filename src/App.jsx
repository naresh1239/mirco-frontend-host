// import { useState } from "react";
// import "./App.css";

// import Button from "remoteApp/Button";
// import useStore from "remoteApp/store";

// function App() {
//   const [count, setCount] = useStore();

//   return (
//     <div className="App">
//       <h1>Host Application</h1>
//       <Button />
      
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

const cartItems = [
  {
    id: 1,
    image: "/white-t-shirt.avif",
    title: "Tshirt",
    description: "Cotton shirt",
    price: 200,
  },
  {
    id: 2,
    image: "/hoodie.avif",
    title: "Hoodie",
    description: "Fleece hoodie",
    price: 350,
  },
  {
    id: 3,
    image: "/jeans.avif",
    title: "Jeans",
    description: "Slim fit denim",
    price: 500,
  },
  {
    id: 4,
    image: "/cap.avif",
    title: "Cap",
    description: "Adjustable cotton cap",
    price: 100,
  },
  {
    id: 5,
    image: "/sneakers.avif",
    title: "Sneakers",
    description: "Running shoes",
    price: 800,
  },
];


import React, { Suspense, useState } from 'react'
import List from './List'
// import Appjs from "remoteApp/App";
const Appjs = React.lazy(() => import('remoteApp/App'));

const App = () => {
  const [total, settotal] = useState(0)
  const [totalItem, settotalItem] = useState(0)
  
  return (
    <>
    <div className="MainBox w-full min-h-screen flex justify-center items-center">
 <div className='flex w-[80%] h-[80vh] bg-white shadow-lg rounded-lg mx-auto overflow-hidden'>
 <div className="left w-[75%] bg-[#f0f0f0] p-10">
 <div className='header flex justify-between items-center mb-2'>
    <h1 className='text-[20px] font-bold'>Host</h1>
  </div>
  <div className='header flex justify-between items-center mb-5'>
    <h1 className='text-[25px] font-bold'>Shopping cart</h1>
    <p1>items : {totalItem}</p1>
  </div>
  <div className='list max-h-100 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>

    {
      cartItems.map((item) => (
        <List key={item.id} item={item}  settotal={settotal} settotalItem={settotalItem}/>
      ))
    }

  </div>
  </div>
  <div className="right w-[30%] flex justify-center items-center">
    <Suspense fallback={<div>Loading remote app...</div>}>
    <Appjs/>
    </Suspense>

  </div>
  </div>
</div>
<div>
Remote app :- https://micro-frontend-remo.netlify.app/
</div>
</>
  )
}

export default App