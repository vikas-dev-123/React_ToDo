"use client"
import { useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("") 
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
       e.preventDefault()
       setMainTask([...mainTask, { title, desc }]) 
       settitle("")
       setdesc("")
       console.log(mainTask)
  }
  const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderrTask = <h2>No Task Available</h2>
  
  if (mainTask.length>0){
    renderrTask = mainTask.map(function(t, i){
      return (
      <li key={i} className='flex items-center justify-between mb-5'>
        <div className=' flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <p className='text-lg font-medium'>{t.desc}</p>
      </div>
      <button 
      onClick={ ()=>{
        deleteHandler(i)
      }}
      className='bg-zinc-500 text-white px-4 py-2 rounded font-bold' >Delete</button>
      </li>
      )
      })
  }
  
  return (
     <>
     <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>Vikas's To Do List</h1>
     <form onSubmit={submitHandler} >
      <input type="text"
       className='text-2xl border-zinc-800 rounded border-2 m-2 px-3 py-2'
       placeholder='Enter title here'
       value={title} 
       onChange={(e)=>{
        settitle(e.target.value)
       }}
       />
        <input type="text"
       className='text-2xl border-zinc-800 rounded border-2 m-2 px-3 py-2'
       placeholder='Enter description here' 
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)// two way binding
        }}
       />
        <button className='bg-black text-white px-3 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
     </form>
     <hr />
     <div className='p-8 bg-slate-200'>
      <ul>
        {renderrTask}
      </ul>
     </div>
     </>
  )
}

export default page
