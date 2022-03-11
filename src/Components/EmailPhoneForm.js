import React, { useState } from "react";
import "../Styles/EmailPhoneForm.css";

function EmailPhoneForm(props) {
  const { alert, setAlert, email, phone, setPhone, setEmail } = props;

  const regPhone = /^[0-9]{9}$/;
  const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const emailOnchange = (e) => {
    setEmail(e.target.value);
    if (!regEmail.test(email)) {
      setAlert("email");
    } else {
      setAlert("");
    }
  };

  const phoneOnchange = (e) => {
    setPhone(e.target.value);
    if (!regPhone.test(phone)) {
      setAlert("phone");
    } else {
      setAlert("");
    }
  };
  return (
    <>
      <form className="getApp--phone-email-form-container">
        <div
          className={`getApp--phone-Email-container ${alert && "border-red"}`}>
          {props.selected === "email" ? (
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={emailOnchange}
                className="getApp--input-email"
                placeholder="Email"
              />
            </div>
          ) : (
            <>
              <select name="pincodes" id="pincodes">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+60">+60</option>
                <option value="+63">+63</option>
              </select>
              <input
                type="number"
                value={phone}
                onChange={phoneOnchange}
                className=" getApp--input-phone "
                placeholder="Type Here..."
              />
            </>
          )}
        </div>
        <button type="submit" className="getApp--btn-share-app">
          Share App Link
        </button>
      </form>
      <div className="getApp-alert">
        <div>
          {alert === "email"
            ? "Please enter a email"
            : alert === "phone"
            ? "Please enter a Phone Number"
            : null}
        </div>
      </div>
    </>
  );
}

export default EmailPhoneForm;
