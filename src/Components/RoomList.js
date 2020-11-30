import React, {Component} from 'react';
import {ImCancelCircle} from "react-icons/im";


class RoomList extends Component {
    constructor () {
        super();
        this.state = {
        };
    }

    render(){

        return (
          <div className="container-width">
            
            <div className="flex-title">Flex is the new black</div>
            <div className="flex-desc">
              With flexbox system you're able to build complex layouts easily
              and with free responsivity
            </div>
            <div className="cards">
              {
                this.props.rooms.map((item) => (
                    <div key={item.roomID}>
                        <div className="card">
                        <div className="card-header ch6">
                            <span style={{color:'white', float:'right'}}>
                                <ImCancelCircle onClick={()=>{this.props.deleteRoom(item)}}/>
                            </span>
                        </div>
                        <div className="card-body">
                            <div className="card-title">{item.name}</div>
                            <div className="card-sub-title">Capacity: {item.capacity}</div>
                            <div className="card-desc">
                            {item.description}
                            </div>
                        </div>
                        </div>
                    </div>
                    ))
                }
            </div>
          </div>
        );
    };
}

export default RoomList;