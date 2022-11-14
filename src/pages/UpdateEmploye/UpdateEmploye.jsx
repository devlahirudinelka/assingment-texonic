import React from 'react'
import ChangeAvater from '../../Componets/ChangeProfileAvater/ChangeAvater'
import DropDownMenuFour from '../../Componets/DropDownMenu/DropDownMenuFour'
import DropDownMenuOne from '../../Componets/DropDownMenu/DropDownMenuOne'
import DropDownMenuThere from '../../Componets/DropDownMenu/DropDownMenuThere'
import DropDownMenuTwo from '../../Componets/DropDownMenu/DropDownMenuTwo'
import InputAreaOne from '../../Componets/InputComponent/InputAreaOne'
import InputAreaTwo from '../../Componets/InputComponent/InputAreaTwo'
import InputFeildOne from '../../Componets/InputComponent/InputFeildOne'
import InputFeild from '../../Componets/InputComponent/InputFeildOne'
import InputFeildThree from '../../Componets/InputComponent/InputFeildThree'
import InputFeildTwo from '../../Componets/InputComponent/InputFeildTwo'
import '../CreateEmploye/createuser.css'
export default function UpdateEmploye(props) {
    return (
        <>
            <div className="createUser">
                <span className='create-title-name'>Update Employee</span>
                <form class="form-container">
                    <div class="rowOne">
                        <div class="col">
                            <InputFeildOne
                                labelname="First Name"
                                placeholder="Enter First Name"
                                star="*"
                            />
                        </div>
                        <div class="col">
                            <InputFeildOne
                                labelname="Last Name"
                                placeholder="Enter Last Name"
                                star="*"
                            />
                        </div>
                    </div>
                    <div class="rowTwo">
                        <div class="col">
                            <DropDownMenuOne
                                labelname="Title"
                                optionOne="Mr"
                                optionTwo="Miss"
                                star="*"
                            />
                        </div>
                        <div class="col">
                            <DropDownMenuOne
                                labelname="Gender"
                                optionOne="Male"
                                optionTwo="Female"
                                star="*"
                            />
                        </div>
                        <div class="col">
                            <InputFeildTwo
                                labelname="NIC"
                                placeholder="Enter NIC Number"
                                star="*"
                            />
                        </div>
                        <div class="col">
                            <InputFeildTwo
                                labelname="Date of Birth"
                                placeholder="1990/09/12"
                                star="*"
                            />
                        </div>
                    </div>
                    <div class="rowOne">
                        <div class="col">
                            <InputFeildOne
                                labelname="Contact Number"
                                placeholder="Enter Contact Number"
                                star=""
                            />
                        </div>
                        <div class="col">
                            <InputFeildOne
                                labelname="Email"
                                placeholder="Enter an Email"
                                star=""
                            />
                        </div>
                    </div>
                    <div class="rowTwo">
                        <div class="col">
                            <DropDownMenuTwo
                                labelname="Department"
                                optionOne="Human resources"
                                optionTwo="Marketing and sales"
                                optionThree="IT"
                                optionFour="Research and development"
                                star="*"
                            />
                        </div>
                        <div class="col">
                            <DropDownMenuTwo
                                labelname="Designation"
                                optionOne="Engineer"
                                optionTwo="Director of marketing"
                                optionThree="Marketing manager"
                                optionFour="Manager"
                                star="*"
                            />
                        </div>
                        <div class="col">
                            <DropDownMenuThere
                                labelname="Nationality"
                                optionOne="Sri Lankan"
                                optionTwo="Indian"
                                optionThree="Australian"

                                star=""
                            />
                        </div>
                    </div>
                    <div className="rowOne">
                        <div className="col">
                            <InputFeildThree
                                labelname="Address"
                                placeholder="Enter Address"
                                star=""
                            />
                        </div>
                    </div>
                    <div className="rowOne">
                        <div className="col">
                            <DropDownMenuFour
                                labelname="Country"
                                optionOne="Sri Lanka"
                                optionTwo="India"
                                optionThree="United Kindom"
                                optionThree="Australia"
                                star=""
                            />
                        </div>
                        <div className="col">
                            <DropDownMenuFour
                                labelname="City"
                                optionOne="Galgamuwa"
                                optionTwo="Narammala"


                                star=""
                            />
                        </div>
                    </div>
                    <div className="rowOne">
                        <div className="Col">
                            <ChangeAvater
                                labelname="Profile Picture"
                            />
                        </div>
                        <div className="Col">
                            <InputAreaOne
                                labelname="Address"
                                placeholder="Enter Address"
                                star=""
                            />
                        </div>
                    </div>
                    <div className="rowOne">
                        <div className="col">
                            <InputAreaTwo
                                labelname="Remark"
                                placeholder="Enter Remark"
                                star=""
                            />
                        </div>
                    </div>
                    <div className="row-checkbox">
                        <input type="checkbox" id="active" name="active" value="Active" />
                        <label for="vehicle1" className='label-text'>Active</label>
                    </div>
                    <div className="button-row">
                        <button className='submit'>Submit</button>
                        <button className='reset'>Reset</button>
                    </div>
                </form>

            </div>
        </>
    )
}
