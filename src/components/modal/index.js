import React from 'react'
import './styles.css'

const Modal=({modal, completeTask, setModal})=>{
    return (
        <div className="modal-container">
            <div className="modal-card">
                <div className="modal-body">{modal.msg}</div>
                <div className="modal-buttons">

                    <button className="button-cancel" 
                    onClick={()=>setModal(modal.isActive = false)}
                    >Cancelar
                    </button>

                    <button 
                    className="button-confirm" 
                    onClick={()=>completeTask(modal.item)}
                    >Confirmar
                    </button>
                
                </div>
            </div>
        </div>
    )
}

export default Modal