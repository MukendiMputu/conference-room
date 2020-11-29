import React, { Component } from 'react';
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";

class BoardMembers extends Component {
    constructor () {
        super();
        this.state = {}
    }

    render() {
        return(
            <div className="container-width">
                <h1 className="bdg-title">The team</h1>
                <div className="badges">
                    <div className="badge">
                        <div className="badge-header"></div>
                        <img alt="" src="img/team1.jpg" className="badge-avatar" />
                        <div className="badge-body">
                            <div className="badge-name">Adam Smith</div>
                            <div className="badge-role">CEO</div>
                            <div className="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                        </div>
                        <div className="badge-foot">
                            <span className="badge-link"><ImFacebook /></span>
                            <span className="badge-link"><ImTwitter /></span>
                            <span className="badge-link"><ImLinkedin /></span>
                        </div>
                    </div>
                    <div className="badge">
                        <div className="badge-header"></div>
                        <img alt="" src="img/team2.jpg" className="badge-avatar" />
                        <div className="badge-body">
                            <div className="badge-name">John Black</div>
                            <div className="badge-role">Software Engineer</div>
                            <div className="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                        </div>
                        <div className="badge-foot">
                            <span className="badge-link"><ImFacebook /></span>
                            <span className="badge-link"><ImTwitter /></span>
                            <span className="badge-link"><ImLinkedin /></span>
                        </div>
                    </div>
                    <div className="badge">
                        <div className="badge-header"></div>
                        <img alt="" src="img/team3.jpg" className="badge-avatar" />
                        <div className="badge-body">
                            <div className="badge-name">Jessica White</div>
                            <div className="badge-role">Web Designer</div>
                            <div className="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
                        </div>
                        <div className="badge-foot">
                            <span className="badge-link"><ImFacebook /></span>
                            <span className="badge-link"><ImTwitter /></span>
                            <span className="badge-link"><ImLinkedin /></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardMembers;

