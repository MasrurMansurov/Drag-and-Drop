import { useState } from 'react'
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

const CreateTask = ({setTasks}) => {
    const [task, setTask] = useState({
        id: '',
        name: '',
        status: 'todo'
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!task.name.trim()) {
            return toast.error('Task name cannot be empty!');
        }
        if(task.name.length < 3){
            return toast.error('A task must have > then 3 characters!')
        }
        if(task.name.length > 100){
            return toast.error("A task mustn't be > then 100 characters!")
        }
         
        const  newTask = {...task, id: uuidv4()}

        setTasks((prev) => {
            const list = [...prev, newTask]
            localStorage.setItem('tasks', JSON.stringify(list))
            return list
        })
        
            toast.success('Task created successfully!')

        setTask({
            id: '',
            name: '',
            status: 'todo'
        })
    }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-[10px]'>
      <input 
      value={task.name}
        onChange={(e) => setTask({...task, name: e.target.value})} 
        type="text" 
        placeholder='Task' 
        className='p-[5px_10px] rounded-sm border-slate-100' 
        />
      <button 
      className='border-blue-600 p-[5px_20px] bg-blue-600 text-white rounded-sm'
      >
        Create
        </button>
    </form>
  )
}

CreateTask.propTypes = {
  setTasks: PropTypes.func.isRequired
}

export default CreateTask
