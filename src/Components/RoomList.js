import React, {Component} from 'react';


class RoomList extends Component {
    render(){
        return(
                <div className="container-width">
                <div className="flex-title">Flex is the new black</div>
                <div className="flex-desc">With flexbox system you're able to build complex layouts easily and with free responsivity</div>
                <div className="cards">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <div className="card-title">Title one</div>
                            <div className="card-sub-title">Subtitle one</div>
                            <div className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header ch2"></div>
                        <div className="card-body">
                            <div className="card-title">Title two</div>
                            <div className="card-sub-title">Subtitle two</div>
                            <div className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header ch3"></div>
                        <div className="card-body">
                            <div className="card-title">Title three</div>
                            <div className="card-sub-title">Subtitle three</div>
                            <div className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header ch4"></div>
                        <div className="card-body">
                            <div className="card-title">Title four</div>
                            <div className="card-sub-title">Subtitle four</div>
                            <div className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header ch5"></div>
                        <div className="card-body">
                            <div className="card-title">Title five</div>
                            <div className="card-sub-title">Subtitle five</div>
                            <div className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header ch6"></div>
                        <div className="card-body">
                            <div className="card-title">Title six</div>
                            <div className="card-sub-title">Subtitle six</div>
                            <div className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default RoomList;