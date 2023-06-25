import React, { useRef, useState,useCallback, useEffect } from 'react'
import './popup.css'
import { error } from 'console';
import Notify_module from './notify_module';

export interface notifyProp{
    id: number,
    type: string,
    document:string,
    icon: string,
}
const toastDetails = {
    timer: 5000,
    Success:{
        icon:'fa-circle-check',
        text:"This is a success toast."
    },
    Error:{
        icon:"fa-circle-xmark",
        text: "This is an error toast.",
    },
    Warning:{
        icon:"fa-triangle-exclamation",
        text: "This is a warning toast.",
    },
    Info:{
        icon:"fa-circle-info",
        text: "This is a information toast.",
    }
}


const Popup = () => {
    const [notify_list, set_notify_list ] = useState<notifyProp[]>([]);
    let toastProperties: notifyProp;

    const removeToast = (toast: notifyProp) => {
        deleteNotify(toast.id);
    }
    
    const deleteNotify = useCallback((id: number) => {
        const notifyListItem =  notify_list.filter(e => e.id !== id); 
        console.log(notifyListItem);
        set_notify_list(notifyListItem);
    
    }, [notify_list, set_notify_list]);

    useEffect(() => {
        console.log("render");
    }, [notify_list])
    const createToast = (t: string) => {
        let icon: string = "";
        let text: string = "";
        switch (t){
            case "Success":
            case "Error":
            case "Warning":
            case "Info":
                icon = toastDetails[t].icon;
                text = toastDetails[t].text;
                break;
            default:
                break;
        };

        toastProperties = {
            id: Math.random() * 100,
            type: t,
            document: text,
            icon: icon,
        }

        set_notify_list([...notify_list, toastProperties]);
        const wait = (toastDetails.timer) => new Promise((removeToast) =>setTimeout(() => removeToast(toastProperties, toastDetails.timer)))
        setTimeout(() => removeToast(toastProperties), toastDetails.timer)

    }
  return (
    <div>
        <ul className="notifications">
            <Notify_module notifyList={notify_list} deleteNotify={deleteNotify}/>
        </ul>
        <div className="buttons">
            <button onClick={() => (createToast("Success"))}  className="btn" id="success">Success</button>
            <button onClick={() => (createToast("Error", ))}    className="btn" id="error">Error</button>
            <button onClick={() => (createToast("Warning", ))}  className="btn" id="warning">Warning</button>
            <button onClick={() => (createToast("Info", ))}     className="btn" id="info">Info</button>
        </div>
    </div>
  )
}

export default Popup