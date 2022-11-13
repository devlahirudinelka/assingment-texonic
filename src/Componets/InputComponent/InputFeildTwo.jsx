import React from 'react'
import './inputfeild.css'
export default function InputFeildTwo(props) {
    return (
        <>
            <div className="input-field-main-two">
                <label for={props.usage} className="input-label-two">{props.labelname}<sup>{props.star}</sup></label>
                <input type={props.type} className="input-field-two" id={props.id} name={props.name} placeholder={props.placeholder} />
            </div>
        </>
    );
}
