import React, { useRef } from 'react'
import './popup.css'
import { error } from 'console';

const Popup = () => {
    const notification = useRef<HTMLUListElement>(null);


    const successBtn = useRef<HTMLDivElement>(null);
    const errorBtn = useRef<HTMLDivElement>(null);
    const warningBtn = useRef<HTMLDivElement>(null);
    const infoBtn = useRef<HTMLDivElement>(null);

    const createToast = (r : React.RefObject<HTMLDivElement>) => {
        const button = r.current;

        console.log(button?.firstElementChild?.id);

        const toast1 = React.createElement("li", {
            className:`toast ${button?.firstElementChild?.id}`,
            children:
                `<div className="column">
                <i className="fa-solid fa-circle-check"></i>
                <span>Success : This is a success toast.</span>
                </div>
                <i className="fa-solid fa-xmark"></i>`
        })
        notification.current?.remove( toast1 );
    }
  return (
    <div>
        <ul ref={notification} className="notifications">
            <li className="toast success">
                <div className="column">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Success : This is a success toast.</span>
                </div>
                <i className="fa-solid fa-xmark"></i>
            </li>
            <li className="toast error">
                <div className="column">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Error : This is an error toast.</span>
                </div>
                <i className="fa-solid fa-xmark"></i>
            </li>
            <li className="toast warning">
                <div className="column">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Warning : This is a warning toast.</span>
                </div>
                <i className="fa-solid fa-xmark"></i>
            </li>
            <li className="toast info">
                <div className="column">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Info : This is a information toast.</span>
                </div>
                <i className="fa-solid fa-xmark"></i>
            </li>
        </ul>
        <div className="buttons">
            <div onClick = {() => (createToast(successBtn))} ref={successBtn}><button className="btn" id="success">Success</button></div>
            <div onClick = {() => (createToast(errorBtn))} ref={errorBtn}><button className="btn" id="error">Error</button></div>
            <div onClick = {() => (createToast(warningBtn))} ref={warningBtn}><button className="btn" id="warning">Warning</button></div>
            <div onClick = {() => (createToast(infoBtn))} ref={infoBtn}><button className="btn" id="info">Info</button></div>
        </div>
    </div>
  )
}

export default Popup