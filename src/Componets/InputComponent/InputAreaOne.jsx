import React from 'react'
import './inputfeild.css'
export default function InputAreaOne(props) {
    return (
        <>
            <div className="input-field-main">
                <label for={props.usage} className="input-label">{props.labelname}<sup>{props.star}</sup></label>
                <textarea type={props.type} className="input-field-area" id={props.id} name={props.name} placeholder={props.placeholder} />
            </div>
        </>
    )
}
