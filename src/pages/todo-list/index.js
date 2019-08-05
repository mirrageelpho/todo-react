import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/modal'

import './styles.css'

const TodoList = () => {

    const [tasks, setTasks] = useState([])
    const [modal, setModal] = useState({
        msg: '',
        isActive: false,
        data:{}
    })

    useEffect(()=>{
        loadTaks()
    },[])
    
    function loadTaks(){
        if(JSON.parse(localStorage.getItem('tasks'))) {
            setTasks(JSON.parse(localStorage.getItem('tasks')))
        }
    }
    function showModal(item){
        if(item.complete){
            setModal({msg: 'Você quer reabrir essa tarefa?', isActive: true, item})
        }else{
            setModal({msg: 'Deseja Conluir essa tarefa?', isActive: true, item})
        }
    }
    function completeTask(task){

        let tasks = JSON.parse(localStorage.getItem('tasks'))
        const newTaks = tasks.filter(tasks => tasks.id !== task.id)
    
        if(task.complete){
          task.complete = false
          newTaks.unshift(task)
    
        }else{
          task.complete = true
          newTaks.push(task)
        }
    
        localStorage.removeItem('tasks');
        localStorage.setItem('tasks', JSON.stringify(newTaks));
        loadTaks()
        setModal(false)
    }

    return (
        <>
        { modal.isActive && 
            <Modal  
            modal={modal} 
            completeTask={completeTask} 
            setModal={setModal}/>
        }
        <div className="page-container">
            <div className="page-header">
                <h2>Lista de Tarefas</h2>
                <Link to="/create-task">
                    <button><i className="fas fa-plus"></i></button>
                </Link>
            </div>

            <div className="page-content">
                <ul>
                    {   
                    tasks.map(item =>{
                        return(
                            <li className={item.complete ? 'complete':''} key={item.id} onClick={()=>showModal(item)}> {item.title} </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default TodoList