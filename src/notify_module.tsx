
import React, {useCallback} from 'react'
import './notify_module.css'
import { notifyProp } from './popup'


interface Props{
    notifyList: notifyProp[],
    deleteNotify: Function;
}

const Notify_module = (props: Props) => {

    
  return (
    <div>
        {
            props.notifyList.map((toast, i) => (
                <li className={`toast ${toast.type.toLowerCase()}`} key={i}>
                    <div className="column">
                        <i className={`fa-solid ${toast.icon}`}></i>
                        <span>{toast.type} : {toast.document}</span>
                    </div>
                    <i className="fa-solid fa-xmark" onClick={() => props.deleteNotify(toast.id)}></i>
                </li>
            ))
        }
        
    </div>
    
  )
}

export default Notify_module