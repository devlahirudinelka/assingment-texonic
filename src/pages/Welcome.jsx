import React from 'react'

export default function Welcome() {
    return (
        <div className="welcome" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "80vw", height:"80vh", rowGap: "90px"}}>
            <span style={{ fontFamily: "cursive", fontSize: "30px", fontWeight: "700"}}>Employee Management System</span>
            <img src="https://www.forensicnotes.com/wp-content/uploads/2019/01/hr-service-img.jpg" alt="" style={{ width: "45vw"}} />
        </div>
    )
}
