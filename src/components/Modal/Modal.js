import React from 'react';
import './Modal.css';
import close from "../../assets/images/close.png";

export const Modal = (props) => {
    return (
        <div style={{ display: props.display }} className="modal">
            <div className="close">
                <img onClick={props.close} className="close-icon" src={close} alt='Close Icon' />
            </div>
            <div className="modal-content">
                <h3 className="modal-title">{props.title}</h3>
                <div className="modal-content-p">
                    <p className="modal-paragraph">{props.paragraph1}</p>
                    <p className="modal-paragraph">{props.paragraph2}</p>
                    <p className="modal-paragraph">{props.paragraph3}</p>
                    <p className="modal-paragraph">{props.paragraph4}</p>
                    <p className="modal-paragraph">{props.paragraph5} <a className="link" href={props.href} target="_blank">{props.linkText}</a> </p>
                </div>
            </div>
        </div>
    )
}
