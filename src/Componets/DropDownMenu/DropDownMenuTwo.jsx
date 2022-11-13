import React from 'react'
import './DropDownMenuOne'
export default function DropDownMenuTwo(props) {
    return (
        <>
            <div className="input-field-main-two">
                <label for={props.usage} className="input-label">{props.labelname}<sup>{props.star}</sup></label>
                <select class="form-select-two" aria-label="">
                    <option selected className='optionText-two'>- Select -</option>
                    <option value="1" className='optionText-two'>{props.optionOne}</option>
                    <option value="2" className='optionText-two'>{props.optionTwo}</option>
                    <option value="3" className='optionText-two'>{props.optionThree}</option>
                    <option value="4" className='optionText-two'>{props.optionFour}</option>
                </select>
            </div>
        </>
    )
}
