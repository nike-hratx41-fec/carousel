import React from 'react';
import MainMenu from './MainMenu';
import HelpCollapsibleMenu from './HelpCollapsibleMenu';
import AboutCollapsibleMenu from './AboutCollapsibleMenu';
import SocialFooter from './SocialFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainFooter = (props) => {
    return (
        // <div className="main-footer">
        //     <div className="column"><MainMenu /></div>
        //     <div className="column"><HelpCollapsibleMenu /></div>
        //     <div className="column"><AboutCollapsibleMenu /></div>
        //     <div><SocialFooter /></div>
        // </div>
        <Container fluid="true">
            <Row>
                <Col sm={12} md={3} lg={2}><MainMenu /></Col>
                <Col sm={12} md={3} lg={2}><HelpCollapsibleMenu /></Col>
                <Col sm={12} md={3} lg={2}><AboutCollapsibleMenu /></Col>
                <Col sm={12} md={3} lg={6} className="social"><SocialFooter /></Col>
            </Row>
        </Container>
    )
}

export default MainFooter;