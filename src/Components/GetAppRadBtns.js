import React from 'react'
import '../Styles/GetAppRadBtns.css'

function GetAppRadBtns(props) {
    const changeValue = () => {
        props.setSelected(props.value);
        props.setEmail('')
        props.setPhone('')

        props.setAlert('');

    }
    return (
        <>

            <label className="rad-label" onClick={changeValue}>

                <input type="radio" className="rad-input" name="rad" />
                <div className="rad-btn">
                    <svg viewBox="0 0 20 20" id="circle" className="sc-djusq7-2 ctMLcL">
                        <circle cx="10" cy="10" r="8" name="radio" value="email" label="Email" checked="" className={`${props.value === props.selected ? 'outerCircle-selected' : 'outerCircle-unselected'}`}>
                        </circle>
                        <circle cx="10" cy="10" r="5" name="radio" value="email" label="Email" checked="" className={`${props.value === props.selected ? 'innerCircle-selected' : 'innerCircle-unselected'}`}>
                        </circle>
                    </svg>
                </div>
                <div className="rad-text">{props.label}</div>
            </label>
        </>
    )
}

export default GetAppRadBtns
