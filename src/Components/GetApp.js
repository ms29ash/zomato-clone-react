import React, { useState } from 'react'
import '../Styles/GetApp.css'
import DownloadLinks from './DownloadLinks'
import EmailPhoneForm from './EmailPhoneForm'
import GetAppRadBtns from './GetAppRadBtns'

function GetApp() {
    const [selected, setSelected] = useState('email')
    const [alert, setAlert] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    return (
        <div className="getApp">
            <div className="getApp-img">
                <img src="https://b.zmtcdn.com/data/pro/5722d9e687511d79616bcab92470734e1596187147.png" alt="" />
            </div>
            <div className="getApp-form-head">
                <h1>Get the Zomato App</h1>
                <p>We will send you a link, open it on your phone to download the app</p>


                <div className="rad-btns">

                    <GetAppRadBtns label="Email" value="email" selected={selected} setSelected={setSelected} setAlert={setAlert} setEmail={setEmail} setPhone={setPhone} />
                    <GetAppRadBtns label="Phone" value="phone" selected={selected} setSelected={setSelected} setAlert={setAlert} setEmail={setEmail} setPhone={setPhone} />

                </div>
                <div className="emailorphone">
                    <EmailPhoneForm selected={selected}
                        alert={alert} setAlert={setAlert} email={email} phone={phone} setEmail={setEmail} setPhone={setPhone} />

                </div>
                <div className="getApp-download-links-container">
                    <DownloadLinks />
                </div>

            </div>

        </div>
    )
}

export default GetApp
