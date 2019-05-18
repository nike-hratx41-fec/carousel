import React from 'react';
import Slider from 'react-slick';
import Footer from './Footer'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        // bind functions below
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <h2>YOU MAY ALSO LIKE</h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://c.static-nike.com/a/images/t_PDP_1728_v1/h1m9ebm8h9i4063k0sw5/air-jordan-9-retro-mens-shoe-Qf2zbt.jpg" alt="shoe pic"></img>
                        <p className="colors">5 Colors</p>
                        <p className="shoe-name">Nike Force Savage Elite 2</p>
                        <p>Men's Football Cleat</p>
                        <p>$140</p>
                    </div>
                    <div>
                        <img src="https://c.static-nike.com/a/images/t_PDP_1728_v1/ytzdf6z0rhvcyf5yfpu2/air-vapormax-flyknit-3-mens-shoe-F6Jwxw.jpg"></img>
                        <p className="colors">2 Colors</p>
                        <p className="shoe-name">Nike Zoom KD12</p>
                        <p>Basketball Shoe</p>
                        <p>$150</p>
                    </div>
                    <div>
                        <img src="https://c.static-nike.com/a/images/t_PDP_1728_v1/ur9zovx82ou6lac0vbml/air-max-720-mens-shoe-gJHbjD.jpg"></img>
                        <p className="colors">14 Colors</p>
                        <p className="shoe-name">Nike Air Max 7230</p>
                        <p>Men's Shoe</p>
                        <p>$180</p>
                    </div>
                    <div>
                        <img src="https://c.static-nike.com/a/images/t_PDP_1728_v1/rstv5souferdc49ccydb/air-vapormax-flyknit-2-random-mens-shoe-Z4SKJ5.jpg"></img>
                        <p className="colors">6 Colors</p>
                        <p className="shoe-name">Nike Metcon 4 XD By You</p>
                        <p>Cross Training Shoe</p>
                        <p>$150</p>
                    </div>
                    <div>
                        <img src="https://c.static-nike.com/a/images/t_PDP_1728_v1/p5grc5uivwkf3ll6z9t8/air-vapormax-plus-mens-shoe-w4xgr4.jpg"></img>
                        <p className="colors">6 Colors</p>
                        <p className="shoe-name">Nike Air VaporMax Flyknit 3</p>
                        <p>Men's Shoe</p>
                        <p>$190</p>
                    </div>
                    <div>
                        <img src="https://c.static-nike.com/a/images/t_PDP_1728_v1/tfjvzcspxif0qdaqkbms/air-max-270-mens-shoe-jKGdGN.jpg"></img>
                        <p className="colors">8 Colors</p>
                        <p className="shoe-name">Jordan Proto-React</p>
                        <p>Men's Shoe</p>
                        <p>$150</p>
                    </div>
                </Slider>
                <div><Footer /></div>
            </div>
        );
    }
}

export default Carousel;