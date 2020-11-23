import React, {Component} from 'react';



class MainHeader extends Component {

    constructor() {
        super();
        this.state = {
            title: "Conference Room",
        }
    }

    render() {
        return(
            <header className="header-banner">
                <div className="container-width">
                    <div className="logo-container">
                        <div className="logo">{this.state.title}</div>
                    </div>
                    <nav className="menu">
                        <div className="menu-item">Login</div>
                        <div className="menu-item">Impressum</div>
                        <div className="menu-item">About Us</div>
                    </nav>
                    <div className="clearfix"></div>
                    <div className="lead-title">Elevate your standards</div>
                    <div className="sub-lead-title">With modern equipment and best accomodation,<br/>
                    we put your audience and yourself in the best evironment.</div>
                    <div className="lead-btn">Learn more</div>
                </div>
            </header>
        
        );
    };

}

export default MainHeader;