import React from 'react'
import './inputfeild.css'
export default function InputFeildOne(props) {
    return (
        <>
            <div className="input-field-main">
                <label for={props.usage} className="input-label">{props.labelname}<sup>{props.star}</sup></label>
                <input type={props.type} className="input-field" id={props.id} name={props.name} placeholder={props.placeholder} required/>
            </div>
        </>
    )
}
