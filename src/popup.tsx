import React, { useRef, useState,useCallback, useEffect } from 'react'
import './popup.css'
import Notify_module from './notify_module';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        setTimeout(() => removeToast(toastProperties), toastDetails.timer)

    }

    const successToast = () => {
        toast.success(toastDetails.Success.text, {
            position: "top-right",
            autoClose: toastDetails.timer,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const errorToast = () => {
        toast.error(toastDetails.Error.text, {
            position: "top-right",
            autoClose: toastDetails.timer,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const warningToast = () => {
        toast.warning(toastDetails.Warning.text, {
            position: "top-right",
            autoClose: toastDetails.timer,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const infoToast = () => {
        toast.info(toastDetails.Info.text, {
            position: "top-right",
            autoClose: toastDetails.timer,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div>
            <ul className="notifications">
                <Notify_module notifyList={notify_list} deleteNotify={deleteNotify}/>
            </ul>
            <div className="buttons">
                <button onClick={successToast}  className="btn" id="success">Success</button>
                <button onClick={errorToast}    className="btn" id="error">Error</button>
                <button onClick={warningToast}  className="btn" id="warning">Warning</button>
                <button onClick={infoToast}     className="btn" id="info">Info</button>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    )
}

export default Popup