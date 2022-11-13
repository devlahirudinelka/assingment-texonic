import React from 'react'
import './inputfeild.css'
export default function InputFeildThree(props) {
    return (
        <>
            <div className="input-field-main-three">
                <label for={props.usage} className="input-label-three">{props.labelname}<sup>{props.star}</sup></label>
                <input type={props.type} className="input-field-three" id={props.id} name={props.name} placeholder={props.placeholder} />
            </div>
        </>
    )
}
