import React from 'react'
import InputFeild from '../../Componets/InputComponent/InputFeild'

export default function CreateUser(props) {
    return (
        <>
            <div className="createUser">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <InputFeild
                                labelname="First Name"
                                placeholder="Enter First Name"
                            />
                        </div>
                        <div class="col">
                            <InputFeild
                                labelname="First Name"
                                placeholder="Enter First Name"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
