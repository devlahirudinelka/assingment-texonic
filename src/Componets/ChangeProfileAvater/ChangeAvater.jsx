import React from 'react'
import './changeavater.css'
export default function ChangeAvater(props) {
    const imageHandler = async (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                // setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };
    return (
        <>
            <div className="change-avater">
                <label for={props.usage} className="input-label">{props.labelname}<sup>{props.star}</sup></label>

                <img src="https://i.imgur.com/k0sU8Mg.gif" alt="" className='profile_image' id="coverPreview" />
                
                    <input id="file" type="file" onChange={(e) => imageHandler(e)} ></input>
                    <img src="https://i.imgur.com/10IiCIW.png" alt="" className='img-pick' id="coverPreview" />
                


            </div>

        </>
    )
}
