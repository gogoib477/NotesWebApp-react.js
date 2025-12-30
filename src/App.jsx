import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title, details})

    setTask(copyTask)
    console.log(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex flex-col items-start gap-4 p-10 lg:w-1/2'>
        <h1 className='text-xl font-bold'>Add Notes</h1>

          <input 
          className='px-5 py-2  w-full border-2 rounded outline-none ' 
          type='text' 
          placeholder='Enter Title' 
          value={title} 
          onChange={(e)=>{
            setTitle(e.target.value)
          }}/>

          <textarea 
          className='px-5 py-2 h-30 w-full border-2 rounded outline-none flex flex-row items-start' 
          type='text' 
          placeholder='Enter Task' 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />

          <button className='px-5 py-2 w-full border-2 rounded bg-white text-black outline-none active:scale-95' >
            Add Note
          </button>  
      </form>
      <div className=' p-10 lg:w-1/2 gap-5'>
        <h1 className='text-xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem, idx){

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
 

export default App
