import React from 'react'
import './inputfeild.css'
export default function InputFeild(props) {
    return (
        <>
            <div className="input-field-main">
                <label for={props.usage} className="input-label">{props.labelname}<sup>*</sup></label>
                <input type={props.type} className="input-field" id={props.id} name={props.name} placeholder={props.placeholder} />
            </div>

        </>
    )
}
