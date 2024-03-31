import React from "react";
// import location from "../assets/location.png";
import musawir from "../Image/mupashir.jpg"
// import phone from "../assets/phone.png"

const Contact =()=>{
    return <div className="contact" id="contact">
       <div className="contact-info">
        <h6>madiina</h6>
        <h6>bisharbashiir3@gmail.com</h6>
        <h6>619027495</h6>
       </div>
       <form className="login-form">
       <h2>Contact</h2>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="password" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Comment</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit</button>
       </form>
    </div>
}

export default Contact