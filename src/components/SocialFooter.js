import React from 'react';
const facebook = require('../../assets/images/Social-Facebook-Black.png');
const twitter = require('../../assets/images/logo-twitter-png-47471.png');
const youtube = require('../../assets/images/kisspng-youtube-computer-icons-logo-youtube-music-5b4ad100c4a514.3197520815316298248055.png');
const instagram = require('../../assets/images/logo-instagram-png-13574.png');


const SocialFooter = (props) => {
    return (
        <div className="social-menu">
            <ul className="social-links">
                <li className="social-link"><img className="twitter" src={twitter} /></li>
                <li className="social-link"><img className="facebook" src={facebook} /></li>
                <li className="social-link"><img className="youtube" src={youtube} /></li>
                <li className="social-link"><img className="instagram" src={instagram} /></li>
            </ul>
        </div>
    )
}

export default SocialFooter;
window.SocialFooter = SocialFooter;