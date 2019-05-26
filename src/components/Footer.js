import React from 'react';
import MainFooter from './MainFooter';
import SubFooter from './Subfooter';

const Footer = (props) => {
    return (
        <div className="footer">
            <div><MainFooter /></div>
            <div><SubFooter /></div>
        </div>
    )
}

export default Footer;