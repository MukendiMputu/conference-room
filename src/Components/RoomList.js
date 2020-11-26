import React, {Component} from 'react';


class RoomList extends Component {
    constructor () {
        super();
        this.state = {
            myrooms : []
        };
    }

    componentDidMount () {
        fetch('./rooms.json')
        .then(response => response.json())
        .then(result => {
            const rooms = result.map(item => {
                return item;
            });
            this.setState({
                myrooms : rooms
            });
        });
    }

    render(){
        const roomObjects = this.state.myrooms.map((item) => (
          <div>
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
        ));

        return (
          <div className="container-width">
            
            <div className="flex-title">Flex is the new black</div>
            <div className="flex-desc">
              With flexbox system you're able to build complex layouts easily
              and with free responsivity
            </div>
            <div className="cards">
              {roomObjects}
            </div>
          </div>
        );
    };
}

export default RoomList;