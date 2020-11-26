import React, {Component} from 'react';


class RoomList extends Component {
    constructor () {
        super();
        this.state = {
            myrooms : [],
            lastIdx: 0
        };
    }

    componentDidMount () {
        fetch('./rooms.json')
        .then(response => response.json())
        .then(result => {
            const rooms = result.map(item => {
                item.roomID = this.state.lastIdx;
                this.setState({lastIdx: this.state.lastIdx + 1});
                return item;
            });
            this.setState({
                myrooms : rooms
            });
        });
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
                this.state.myrooms.map((item) => (
                    <div key={item.roomID}>
                        <div className="card">
                        <div className="card-header ch6"></div>
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