import { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask'
import ListTasks from './components/ListTasks'
import { Toaster } from 'react-hot-toast'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {

  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  return ( 
  <DndProvider backend={HTML5Backend} >
  <Toaster position="top-center" />
    <div 
    className='bg-slate-100 w-screen h-screen flex flex-col items-center pt-[80px] gap-[50px]'>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
  </DndProvider>
  )
}

export default App
 