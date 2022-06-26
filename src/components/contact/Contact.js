import React, { useRef, useState } from "react";

import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [done, setDone] = useState(false)

    const formHandle = (event) => {
        event.preventDefault();
        emailjs
            .sendForm(
                "service_rrvnzco",
                "template_3v5nih4",
                formRef.current,
                "user_DrriDPTGKO2Zj4RDXCA6W"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets's Discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +880-XXXXXXXXXX
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            shaikatpal56@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Senbag, Noakhali, Chottragram, Bangladesh
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={formHandle}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
