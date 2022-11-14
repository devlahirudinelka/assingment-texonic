import React from 'react'
import './dropdownMenu.css'
export default function DropDownMenuOne(props) {
    return (
        <>
            <div className="input-field-main">
                <label for={props.usage} className="input-label">{props.labelname}<sup>{props.star}</sup></label>
                <select class="form-select" aria-label="" required>
                    <option value="0" className='optionText'>- Select -</option>
                    <option value="1" className='optionText'>{props.optionOne}</option>
                    <option value="2" className='optionText'>{props.optionTwo}</option>
                </select>
            </div>
        </>
    )
}
