import React from 'react';
//const flag = require("../../assets/images/us-flag.png");

const Copywright = (props) => {
    return (
        <div className="copywright">
            <div className="copywright-link">
                <span>Flag</span>
                <a id="us">United States</a>
            </div>
            <div className="copywright-link">
                <span>© 2019 Nike, Inc. All Rights Reserved</span>
            </div>
        </div >
    )
}

export default Copywright;