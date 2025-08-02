import React, { useState } from 'react'
import useStore from "remoteApp/store";
const List = ({item,settotal, settotalItem}) => {
    
    const [Quntity, setQuntity] = useState(0)
    const [count, setCount] = useStore();

  const SetItemsSharefn = (item)=>{
   let obj = {
    id : item.id,
    title : item.title,
    description : item.description,
    Quntity : Quntity + 1,
    price : item.price,
   }

    setCount((prev) => {
      let exist = prev.some((el) => el.id === item.id);
      if(exist){
      return prev.map((e)=>{
      if(e.id === item.id){
        return {...e, Quntity: e.Quntity + 1};
      }
      else{
        return e;
      }
      
    })
  }else{
        return [...prev, obj];
  }
  }
  );
  }
  const removeItemsSharefn = (item)=>{

     setCount((prev) => prev.map((e)=>{
      if(e.id === item.id){
        return {...e, Quntity: e.Quntity - 1};
      }else{
        return e;
      }}).filter((e) => e.Quntity > 0)
    );

      
  }

  return (
    <div className='list w-[100%] h-[150px] border-t border-black-300 flex justify-between items-center p-5 bg-[#f0f0f0] gap-5'>
        <div className='w-[20%]'>
        <img src={item.image} alt="Placeholder" className='w-[100%] h-[100%] object-cover' />
        </div>
        <div className='w-[30%] '>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
        </div>
        <div className='w-[30%]'>
       <button onClick={()=>{
        setQuntity((prev)=> prev - 1)
        settotal((prevTotal) => prevTotal - item.price)
        settotalItem((prevTotalItem) => prevTotalItem - 1)
         removeItemsSharefn(item)
        }} className='btn bg-red-500 text-white px-1 py-1 rounded'>{`<`}</button>
       {Quntity}
       <button onClick={()=>{
            settotal((prevTotal) => prevTotal + item.price)
        setQuntity((prev)=> prev + 1)
        settotalItem((prevTotalItem) => prevTotalItem + 1)
       SetItemsSharefn(item)
        }}  className='btn bg-red-500 text-white px-1 py-1 rounded'>{`>`}</button>
        </div>
        <div className='w-[30%]'>
        <h1>{item.price}</h1>
        </div>
        <div className='w-[10%]'>
        <button className='bg-red-500 text-white px-3 py-1 rounded'>Remove</button>
        </div>
    </div>
  )
}

export default List