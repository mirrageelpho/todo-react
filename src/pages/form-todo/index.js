import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const FormTodo = (props) =>{

const [title, setTitle] = useState("")
const [tasks, setTasks] = useState([])


useEffect(()=>{
    loadTaks()
},[])

 function loadTaks(){
    if(JSON.parse(localStorage.getItem('tasks'))) {
        setTasks(JSON.parse(localStorage.getItem('tasks')))
    }
 }

 function  create(){
    if(title === '' || title === null || title === undefined){
      alert('Campo obrigatório')
      return null
    }
    let hash = (+new Date).toString(36)
    tasks.unshift({id: hash, title, complete: false})
    localStorage.setItem('tasks', JSON.stringify(tasks));
    props.history.push("/")
  }

  function handleChangeImput (event){
     return  setTitle(event.target.value)
  }

    return (
        <>
        <div className="page-header">
            <h2>Nova Tarefa</h2>
            <Link to="/">
                <button ><i className="fas fa-chevron-left"></i></button>
            </Link>
        </div>
        <div className="page-content">

            <h4>Título</h4>
            <div className="form">
                <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChangeImput}
                />
                <button onClick={create}><i className="fas fa-plus"></i></button>
            </div>

        </div>
        </>
    )
}
export default FormTodo