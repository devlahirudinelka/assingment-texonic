import React from 'react'
import './dropdownMenu.css'
export default function DropDownMenuFour(props) {
    return (
        <>
            <div className="input-field-main-four">
                <label for={props.usage} className="input-label">{props.labelname}<sup>{props.star}</sup></label>
                <select class="form-select-four" aria-label="">
                    <option selected className='optionText-four'>- Select -</option>
                    <option value="1" className='optionText-four'>{props.optionOne}</option>
                    <option value="2" className='optionText-four'>{props.optionTwo}</option>
                    <option value="3" className='optionText-four'>{props.optionThree}</option>

                </select>
            </div>
        </>
    )
}
