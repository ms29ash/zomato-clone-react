import React from 'react'
import '../Styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top-section">
                <div className="footer-logo">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
                </div>
                <div className="select-countries">


                    <select name="countries" id="countries">
                        <option value="India">India</option>
                        <option value="+1">+1</option>
                        <option value="+60">+60</option>
                        <option value="+63">+63</option>
                    </select>
                </div>
                <div className="select-countries">
                    <select name="countries" id="countries">
                        <option value="English">English</option>
                        <option value="+1">+1</option>
                        <option value="+60">+60</option>
                        <option value="+63">+63</option>
                    </select>
                </div>

            </div>
            <div className="footer-middle-section">
                <div className="footer-list">
                    <p className="footer-title">Company</p>
                    <p>Who We Are</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Report Fraud</p>
                    <p>Contact</p>
                    <p>Investor Relations</p>
                </div>
                <div className="footer-list">
                    <p className="footer-title">FOR FOODIES</p>
                    <p>Code of Conduct</p>
                    <p>Community</p>
                    <p>Blogger Help</p>
                    <p>Mobile Apps</p>
                </div>
                <div className="footer-list">
                    <p className="footer-title">FOR RESTAURANTS</p>
                    <p>Add restaurant</p>
                    <p className="footer-title" style={{ marginTop: "2rem" }}>FOR ENTERPRISES</p>
                    <p>Zomato for Work</p>
                </div>

                <div className="footer-list">
                    <p className="footer-title">FOR YOU</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Security</p>
                    <p>Sitemap</p>

                </div>
                <div className="footer-list">
                    <p className="footer-title">SOCIAL LINKS</p>

                </div>
            </div>
            <hr />
            <div className="footer-bottom-section">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</div>

        </div>
    )
}

export default Footer
